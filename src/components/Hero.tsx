import React from 'react';

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

        </div>

      </div>
    </section>
  );
};

export default Hero;