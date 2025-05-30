import React from 'react';
import { Github, Star, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-16 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent-blue/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent-blue font-medium mb-4 tracking-wider animate-slideUp opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            WELCOME TO MY PORTFOLIO
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slideUp opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Hi, I'm <span className="text-gradient from-accent-blue to-accent-purple">KUANTYK</span>
          </h1>

          <p className="text-xl text-text-secondary mb-8 leading-relaxed animate-slideUp opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            A passionate web developer crafting beautiful, functional, and user-centered digital experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slideUp opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
            <a
              href="https://github.com/NAUTBOL"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={18} className="mr-2" />
              <Star size={18} className="mr-2" />
              Star
            </a>
            <a
              href="https://www.linkedin.com/in/leandrotorressilva/"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={18} className="mr-2" />
              Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;