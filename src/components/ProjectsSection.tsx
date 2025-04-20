
import { FileBarChart, Youtube, BarChart } from 'lucide-react';
import { Card } from './ui/card';

const projects = [
  {
    name: "Electric Vehicles Sales Analysis",
    description: "Comprehensive analysis of global EV sales trends, market penetration, and growth forecasting using Python and Tableau.",
    icon: FileBarChart,
    image: "https://www.bls.gov/opub/btn/volume-12/images/electric-vehicles-main-image.jpg",
    github: "https://github.com/yourusername/ev-sales-analysis"
  },
  {
    name: "YouTube Influencers Analysis",
    description: "Deep dive into content creator metrics, engagement rates, and audience demographics using Python and Power BI.",
    icon: Youtube,
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3",
    github: "https://github.com/yourusername/youtube-influencers-analysis"
  },
  {
    name: "Social Media Impressions Analysis",
    description: "Analysis of social media performance metrics, reach optimization, and engagement patterns using R and SQL.",
    icon: BarChart,
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3",
    github: "https://github.com/yourusername/social-media-analysis"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Animated blurred background elements */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-start/30 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-105"
            >
              <Card className="bg-purple-light/20 backdrop-blur-sm border-0 overflow-hidden relative">
                <div className="p-6">
                  <div className="flex flex-col">
                    <div className="w-full h-48 rounded-lg overflow-hidden mb-4 border-2 border-white/30">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <h3 className="text-white text-xl font-semibold mb-2">{project.name}</h3>
                    <p className="text-white/80 mb-4">{project.description}</p>
                    
                    <div className="absolute bottom-3 right-3">
                      <project.icon className="w-8 h-8 text-white/50 hover:text-white/80 transition-colors" />
                    </div>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
