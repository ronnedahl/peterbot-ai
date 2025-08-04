import React, { useEffect, useRef } from 'react';
import { AISkillType, ProjectType } from '../types/types';

interface SkillBarProps {
  title: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ title, percentage }) => {
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-x-0');

          // Animate the progress bar
          const progressBar = entry.target.querySelector('.skill-progress') as HTMLElement;
          if (progressBar) {
            setTimeout(() => {
              progressBar.style.width = `${percentage}%`;
            }, 300);
          }

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [percentage]);

  return (
    <div
      ref={skillRef}
      className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md mb-6 opacity-0 -translate-x-5 transition-all duration-500 ease-out"
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="skill-progress h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ icon, title, description, technologies }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-500 ease-out opacity-0 translate-y-5 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4">
        <i className={`fa-solid ${icon} text-white text-xl`}></i>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-white dark:bg-gray-900 text-blue-500 text-xs font-medium px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const AIExperience: React.FC = () => {
  const aiSkills: AISkillType[] = [
    { title: "Local LLM Kunskap", percentage: 80 },
    { title: "AI Integration", percentage: 85 },
    { title: "Modell Fine-tuning", percentage: 75 },
  ];

  const aiProjects: ProjectType[] = [
    {
      icon: "fa-microchip",
      title: "Lokal LLM-Driftsättning",
      description:
        "Optimerad driftsättning av öppna språkmodeller på konsumenthårdvara, med fokus på prestanda och effektivitet. Implementerade kvantiseringstekniker för att minska modellens storlek utan att tumma på kvaliteten.",
      technologies: ["PyTorch", "GGML", "ONNX", "LLaMA", "Mistral"],
    },
    {
      icon: "fa-robot",
      title: "AI-driven Webbassistent",
      description:
        "Utvecklade en webbaserad assistent som använder lokala språkmodeller (LLM) för att ge kontextmedvetna svar och utföra uppgifter. Skapade ett responsivt användargränssnitt med React för smidig användarinteraktion.",
      technologies: ["React", "TypeScript", "WebGPU", "Transformers.js"],
    },
    {
      icon: "fa-database",
      title: "Anpassad RAG-Implementation",
      description:
        "Byggde ett Retrieval-Augmented Generation-system som förbättrar LLM-svar med relevant information från en vektordatabas, vilket ökar träffsäkerheten och minskar hallucinationer.",
      technologies: ["LangChain", "Chroma DB", "Node.js", "Express"],
    },
  ];

  return (
    <section id="ai-experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          AI <span className="text-blue-500">Utvecklare</span> Erfarenhet
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 mb-12 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-lg shadow-md">
          <div className="flex-1 min-w-[250px]">
            {aiSkills.map((skill, index) => (
              <SkillBar
                key={index}
                title={skill.title}
                percentage={skill.percentage}
              />
            ))}
          </div>

          <div className="flex-2 min-w-[300px]">
            <h3 className="text-xl font-bold mb-4">Självlärd AI-utvecklare</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              På min fritid har jag utvecklat en djup förståelse för hur lokala Large Language Models (LLMs) fungerar. Jag har experimenterat med att implementera och optimera olika open-source-modeller på lokal hårdvara, med fokus på effektivitet och prestanda.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Jag har byggt flera projekt som integrerar AI-kapacitet med webbgränssnitt och skapat intuitiva sätt för användare att interagera med kraftfulla språkmodeller. Detta inkluderar utveckling av anpassade prompt-tekniker och skapande av specialiserade frontend-komponenter för AI-interaktioner.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Mitt mål är att överbrygga klyftan mellan banbrytande AI-teknologi och användarvänliga webbupplevelser, genom att kombinera mina frontend-utvecklingsfärdigheter med min passion för artificiell intelligens.
            </p>
          </div>

        </div>

        <h3 className="text-2xl font-bold text-center mb-8">
          AI <span className="text-blue-500">Projects</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiProjects.map((project, index) => (
            <ProjectCard
              key={index}
              icon={project.icon}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIExperience;