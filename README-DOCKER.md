# Docker Development Guide för Peterbot

Detta projekt använder Docker för att skapa en konsekvent utvecklingsmiljö för både frontend och backend.

## Förutsättningar

- Docker Desktop (Windows/Mac) eller Docker Engine (Linux)
- Docker Compose v2.0+
- Make (valfritt, för enklare kommandon)

## Snabbstart

### 1. Konfigurera miljövariabler

Kopiera exempel-filerna och redigera med dina API-nycklar:

```bash
# Backend
cp langgraph-api/.env.example langgraph-api/.env
# Redigera langgraph-api/.env med dina OpenAI och Firebase credentials

# Frontend  
cp client/.env.example client/.env
# Redigera client/.env med dina Firebase credentials
```

### 2. Starta utvecklingsmiljön

**Med Make (rekommenderat):**
```bash
make build  # Bygg Docker images
make up     # Starta containers
```

**Utan Make:**
```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml build
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```

### 3. Åtkomst till tjänsterna

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000
- **API Dokumentation**: http://localhost:8000/docs

## Docker-struktur

### Services

1. **backend** - LangGraph API (Python + FastAPI)
   - Port: 8000
   - Hot reload aktiverat
   - Volumes för källkod

2. **frontend** - React + Vite
   - Port: 5173
   - Hot reload aktiverat
   - Volumes för källkod

### Utvecklingsflöde

Källkoden monteras som volumes, så ändringar syns direkt:

- **Backend**: Ändringar i `langgraph-api/src/` laddar om automatiskt
- **Frontend**: Ändringar i `client/src/` laddar om automatiskt

## Vanliga kommandon

### Med Make

```bash
make up         # Starta containers
make down       # Stoppa containers
make restart    # Starta om alla containers
make logs       # Visa loggar för alla services
make logs-api   # Visa bara backend-loggar
make logs-web   # Visa bara frontend-loggar
make shell-api  # Öppna shell i backend container
make shell-web  # Öppna shell i frontend container
make test       # Kör tester
make clean      # Ta bort allt (containers, volumes, images)
```

### Utan Make (Docker Compose direkt)

```bash
# Starta
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d

# Stoppa
docker-compose down

# Visa loggar
docker-compose logs -f

# Shell access
docker-compose exec backend /bin/bash
docker-compose exec frontend /bin/sh

# Kör kommandon
docker-compose exec backend .venv/bin/python scripts/test_config.py
```

## Felsökning

### Backend startar inte

1. Kontrollera att `.env` filen finns och är korrekt konfigurerad
2. Verifiera Firebase och OpenAI credentials:
   ```bash
   docker-compose exec backend .venv/bin/python scripts/test_config.py
   ```

### Frontend kan inte ansluta till backend

1. Kontrollera att `VITE_API_BASE_URL` är satt till `http://localhost:8000`
2. Verifiera att backend körs: `docker-compose ps`

### Permission errors (Linux/Mac)

Om du får permission errors, kan du behöva justera ägare:
```bash
sudo chown -R $USER:$USER .
```

### Rensa allt och börja om

```bash
make clean  # eller: docker-compose down -v --rmi all
make build
make up
```

## Produktion

För produktion, använd produktions-konfigurationen:

```bash
make build-prod
make prod
```

Detta använder:
- Optimerade Docker images
- Nginx för frontend
- Gunicorn för backend
- Säkerhetsförbättringar
- Resource limits

## Docker Compose filer

- `docker-compose.yml` - Bas-konfiguration
- `docker-compose.dev.yml` - Utvecklings-overrides
- `docker-compose.prod.yml` - Produktions-overrides

## Anpassa Docker-miljön

### Lägga till dependencies

**Backend (Python):**
1. Lägg till i `langgraph-api/pyproject.toml`
2. Kör: `docker-compose exec backend uv sync`

**Frontend (Node):**
1. Lägg till med: `docker-compose exec frontend npm install <package>`
2. Detta uppdaterar `package.json` automatiskt

### Miljövariabler

Lägg till i respektive `.env` fil eller i `docker-compose.yml`:

```yaml
environment:
  - MY_CUSTOM_VAR=value
```

## Tips

1. **Loggar i realtid**: Använd `make logs` eller `docker-compose logs -f`
2. **Debugging**: Använd `make shell-api` för att komma åt backend container
3. **Hot reload**: Fungerar automatiskt för både frontend och backend
4. **Databas**: Firebase används externt, ingen lokal databas behövs

## Support

Vid problem:
1. Kolla loggarna: `make logs`
2. Verifiera Docker: `docker --version` och `docker-compose --version`
3. Testa konfiguration: `make test`