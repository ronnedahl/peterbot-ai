#!/bin/bash
# Skript för att applicera Nginx-konfigurationer från projektet till systemet
echo "Applicerar Nginx-konfigurationer..."

# Kopiera alla konfigurationsfiler
sudo cp /var/www/peterbot.dev/nginx/peterbot.dev /etc/nginx/sites-available/ 2>/dev/null || echo "Kunde inte kopiera peterbot.dev"
sudo cp /var/www/peterbot.dev/nginx/speed-date /etc/nginx/sites-available/ 2>/dev/null || echo "Kunde inte kopiera speed-date"

# Testa konfigurationen
echo "Testar Nginx-konfiguration..."
sudo nginx -t

if [ $? -eq 0 ]; then
  echo "Konfiguration OK, laddar om Nginx..."
  sudo systemctl reload nginx
  echo "Klart!"
else
  echo "Nginx-konfigurationen innehåller fel. Inga ändringar har applicerats."
fi
