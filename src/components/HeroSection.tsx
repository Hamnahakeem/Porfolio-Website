import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
      {/* Animated blurred background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-start/30 rounded-full blur-[80px] animate-float"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-start/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">Hamna K</h1>
          <h2 className="text-xl text-white/70 mb-8">Data Analyst|Mentor</h2>
          
          <Button asChild className="bg-transparent border border-white/30 hover:bg-white/10 text-white rounded-md">
            <a href="#contact">Book a Chat</a>
          </Button>
        </div>
        
        <div className="md:w-1/2">
          <div className="space-y-8 md:ml-12">
            <p className="text-white/80">
              Numbers don't lie. The future belongs to those who know how to collect, analyze, and utilize data.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md p-6">
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-white">The future is </span>
                <span className="text-purple-light">data-driven.</span>
              </h3>
              <p className="text-white/80">
                That's where I come in. As a data analyst with expertise in various domains, I specialize in transforming raw data into actionable insights. From electric vehicle market trends to social media analytics, I help businesses make informed decisions through comprehensive data analysis.
              </p>
              <p className="text-white/80 mt-4 font-medium">
                Work with me. Book an exploratory consult today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
