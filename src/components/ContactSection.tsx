import { Button } from './ui/button';
import { ChevronDown, Linkedin, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Animated blurred background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-start/20 rounded-full blur-[100px] animate-float"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              The future is data-driven.<br />
              And it starts today!
            </h2>
            
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-1">
                <a 
                  href="mailto:hamnahakeemk@gmail.com"
                  className="text-white/80 hover:text-white flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  hamnahakeemk@gmail.com
                </a>
              </div>
              <p className="text-white/80 mb-6">9061579505</p>
              <p className="text-white/80">Kondotty<br />malappuram</p>
              
              <div className="flex gap-4 mt-6">
                <a 
                  href="https://www.linkedin.com/in/hamna-k-hakeem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:hamnahakeemk@gmail.com"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3" 
                alt="Data Analytics"
                className="rounded-xl border-2 border-white/10 w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-24 flex justify-center">
          <a href="#home" className="text-white hover:text-white/80 transition-colors">
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
