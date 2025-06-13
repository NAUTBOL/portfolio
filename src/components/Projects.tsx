import React from 'react';
import { projects } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-dark-800">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Web Projects</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Here are some of my recent projects. Each project reflects my commitment to clean code,
            intuitive design, and solving real world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card group animate-fadeIn flex flex-col" // Añadimos flex y flex-col
            >
              <div className="p-6 pb-2 flex flex-col justify-between flex-grow"> {/* Ajuste de padding y flexbox para contenido principal */}
                <div className="flex justify-between items-start mb-4"> {/* Ajustamos a items-start para alinear bien el título y los iconos */}
                  <h3 className="text-xl font-semibold text-text-primary pr-4">{project.title}</h3> {/* Añadimos un poco de padding a la derecha */}
                  <div className="flex space-x-2 flex-shrink-0"> {/* flex-shrink-0 para evitar que los iconos se achiquen */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-dark-700/80 hover:bg-accent-blue/80 transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-dark-700/80 hover:bg-accent-blue/80 transition-colors"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <p className="text-text-secondary mb-4 flex-grow">{project.description}</p> {/* flex-grow para que la descripción ocupe el espacio disponible */}
              </div>

              <div className="px-6 pb-6 pt-2"> {/* Ajustamos padding para las etiquetas */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-dark-600 text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/NAUTBOL"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github size={18} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;