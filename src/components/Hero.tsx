import React, { useEffect, useState } from 'react';
import { API_URL } from '../core/config';
import { ArrowUpFromLine, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const fetchCounterData = async () => {
    const url = API_URL + "counters/total/portfolio";
    const response = await fetch(url);
    if (!response.ok) {
      setCounter(0);
    }
    const data = await response.json();
    setCounter(data.counter);
  };

  const formatViews = (num: number) => {
    return new Intl.NumberFormat('en', {
      notation: 'compact',
      compactDisplay: 'short',
    }).format(num);
  };

  useEffect(() => {
    fetchCounterData();
  }, []);

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

          <p className="text-xl text-text-secondary mb-6 leading-relaxed animate-slideUp opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            A passionate full stack developer crafting beautiful, functional, and user centered digital experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-4 animate-fade-in">
            <a
              href="https://whatsapp.com/channel/0029VbB862m9hXFEujuuJT3C"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full font-bold bg-[#25D366] text-white shadow-sm hover:shadow-md transition-all"
            >
              WHATSAPP
            </a>
            <a
              href="https://t.me/QVAPPS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full font-bold bg-[#0088cc] text-white shadow-sm hover:shadow-md transition-all"
            >
              TELEGRAM
            </a>
            <a
              href="https://play.google.com/store/apps/developer?id=KUANTYK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full font-bold bg-[#FF0000] text-white shadow-sm hover:shadow-md transition-all"
            >
              GOOGLE PLAY
            </a>
            <a
              href="https://x.com/NAUTBOL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full font-bold bg-[#000000] text-white shadow-sm hover:shadow-md transition-all"
            >
              TWITTER
            </a>
          </div>

          <div className="md:flex justify-center flex-wrap gap-4 mb-6 animate-slideUp opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            {/* <a
              href="https://mobile.kuantyk.com"
              className="btn-primary text-sm"
            >
              Mobile Portfolio
            </a> */}
            {/* <a
              href="https://github.com/NAUTBOL"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-full"
            >
              GitHub
            </a> */}
            {/* <a
              href="https://linkedin.com/in/leandrotorressilva"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm text-white bg-[#0077B5] hover:bg-[#006699] px-4 py-2 rounded-full"
            >
              LinkedIn
            </a> */}
            {/* <a
              href="https://t.me/QVAPPS"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm text-white bg-[#0088cc] hover:bg-[#0077b5] px-4 py-2 rounded-full"
            >
              Telegram
            </a> */}
            {/* <a
              href="https://whatsapp.com/channel/0029VbB862m9hXFEujuuJT3C"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm text-white bg-[#25D366] hover:bg-[#1ebe5d] px-4 py-2 rounded-full"
            >
              WhatsApp
            </a> */}
            {/* <a
              href="https://discord.gg/ucv4KMdQZt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm text-white bg-[#5865F2] hover:bg-[#4752C4] px-4 py-2 rounded-full"
            >
              Discord
            </a> */}
          </div>

          <p className="text-lg sm:text-xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Loved by +{formatViews(counter)}
            </span>
          </p>

        </div>

      </div>
    </section>
  );
};

export default Hero;