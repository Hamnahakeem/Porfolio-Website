
import { PlusCircle } from 'lucide-react';
import { Card } from './ui/card';

const clients = [
  {
    name: "Kiara Austen",
    company: "Brookview Ltd.",
    testimonial: "\"Meaningful insights and maximum impact. Wendy made us data converts!\"",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3"
  },
  {
    name: "Gabriel Shelby",
    company: "New Boldford",
    testimonial: "\"Our startup business wouldn't be where it is without Wendy's vision!\"",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3"
  },
  {
    name: "Elliot Sterling",
    company: "Willifred Industries",
    testimonial: "\"The numbers speak for themselves. Wendy is an amazing analyst!\"",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"
  }
];

const ClientFeedback = () => {
  return (
    <section id="clients" className="py-24 relative">
      {/* Animated blurred background elements */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-start/30 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Client Feedback</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <Card key={index} className="bg-purple-light/20 backdrop-blur-sm border-0 overflow-hidden relative">
              <div className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-white/30">
                    <img 
                      src={client.image} 
                      alt={client.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <p className="text-white text-center mb-4">{client.testimonial}</p>
                  
                  <div className="text-center">
                    <p className="text-white font-medium">{client.name}</p>
                    <p className="text-white/70 text-sm">{client.company}</p>
                  </div>
                </div>

                <div className="absolute bottom-3 right-3">
                  <PlusCircle className="w-8 h-8 text-white/50 hover:text-white/80 cursor-pointer transition-colors" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
