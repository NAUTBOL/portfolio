import React from 'react';
import { Mail, Github, Linkedin, Twitter, Palette as Paypal } from 'lucide-react';
import { socialLinks } from '../data/social';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-dark-900">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              I'm currently available for freelance work and full-time positions.
              If you have a project that needs coding or a position to fill, feel free to contact me.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-stretch gap-8">
            <div className="flex-1 card p-8 flex flex-col">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-dark-700 flex items-center justify-center mr-4">
                  <Mail size={20} className="text-accent-blue" />
                </div>
                <div>
                  <p className="text-text-secondary text-sm">Email</p>
                  <a 
                    href="mailto:leandrotorressilva@gmail.com" 
                    className="text-text-primary hover:text-accent-blue transition-colors"
                  >
                    leandrotorressilva@gmail.com
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Find Me On</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {socialLinks.map((link) => {
                  const Icon = link.icon === 'github' 
                    ? Github 
                    : link.icon === 'linkedin' 
                      ? Linkedin 
                      : Twitter;
                      
                  return (
                    <a 
                      key={link.id}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center justify-center"
                    >
                      <Icon size={18} className="mr-2" />
                      {link.name}
                    </a>
                  );
                })}
              </div>
              
              <div className="mt-auto">
                <a 
                  href="https://www.paypal.com/paypalme/NAUTBOL" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn w-full flex items-center justify-center bg-[#0070BA] hover:bg-[#005ea6] text-white"
                >
                  <Paypal size={18} className="mr-2" />
                  Donate via PayPal
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;