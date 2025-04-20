
import { Card } from "./ui/card";
import { Database, Code, FileSpreadsheet, ChartBar, Cpu, Activity } from "lucide-react";

const ExpertiseSection = () => {
  const skills = [
    {
      name: "Business Intelligence",
      items: [
        { text: "Power BI", icon: ChartBar },
        { text: "Tableau", icon: ChartBar },
        { text: "Advanced Excel", icon: FileSpreadsheet },
      ]
    },
    {
      name: "Programming & Analysis",
      items: [
        { text: "SQL", icon: Database },
        { text: "Python", icon: Code },
        { text: "R", icon: Code },
      ]
    },
    {
      name: "Advanced Analytics",
      items: [
        { text: "Machine Learning", icon: Cpu },
        { text: "Exploratory Data Analysis", icon: Activity },
        { text: "Statistical Analysis", icon: ChartBar },
      ]
    }
  ];
  
  return (
    <section id="expertise" className="py-24 relative">
      {/* Animated blurred background elements */}
      <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-gradient-start/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Areas of Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div key={index} className="rounded-xl overflow-hidden">
              <div className="flex flex-col h-full">
                <div className="bg-purple-light/30 backdrop-blur-sm p-6 rounded-t-xl">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
                <div className="bg-purple-light/20 backdrop-blur-sm p-6 space-y-4 flex-1">
                  {category.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-white/10 backdrop-blur-sm p-4 rounded-md flex items-center space-x-3">
                      <skill.icon className="w-5 h-5 text-white opacity-75" />
                      <p className="text-white">{skill.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
