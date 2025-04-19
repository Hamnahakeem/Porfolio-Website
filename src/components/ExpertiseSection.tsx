
import { Card } from "./ui/card";

const ExpertiseSection = () => {
  const skills = [
   "Power BI",
    "Programming",
    "Data modeling",
    "Attention to detail",
    "Statistics and machine learning"
  ];
  
  const services = [
    "Tableau",
    "Data visualization",
    "Dashboard creation",
    "Analysis and exploration",
    "Problem-solving",
    "Forecasting"
  ];
  
  return (
    <section id="expertise" className="py-24 relative">
      {/* Animated blurred background elements */}
      <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-gradient-start/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Areas of Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills Card */}
          <div className="rounded-xl overflow-hidden">
            <div className="flex flex-col h-full">
              <div className="bg-purple-light/30 backdrop-blur-sm p-6 rounded-t-xl">
                <h3 className="text-2xl font-bold text-white">Skills</h3>
              </div>
              <div className="flex flex-1">
                <div className="bg-purple-light/20 backdrop-blur-sm p-6 space-y-4 w-1/2">
                  {skills.map((skill, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm p-3 rounded-md">
                      <p className="text-white text-sm">{skill}</p>
                    </div>
                  ))}
                </div>
                <div className="w-1/2 bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3')" }}></div>
              </div>
            </div>
          </div>
          
          {/* Services Card */}
          <div className="rounded-xl overflow-hidden">
            <div className="flex flex-col h-full">
              <div className="bg-purple-light/30 backdrop-blur-sm p-6 rounded-t-xl">
                <h3 className="text-2xl font-bold text-white">Services</h3>
              </div>
              <div className="flex flex-1">
                <div className="bg-purple-light/20 backdrop-blur-sm p-6 space-y-4 w-1/2">
                  {services.map((service, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm p-3 rounded-md">
                      <p className="text-white text-sm">{service}</p>
                    </div>
                  ))}
                </div>
                <div className="w-1/2 bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3')" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
