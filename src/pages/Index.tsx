
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Sample data for the chart
  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
  ];

  const skills = [
    "Data Analysis",
    "Python",
    "SQL",
    "Tableau",
    "Power BI",
    "Excel",
    "R",
    "Statistical Analysis",
    "Data Visualization",
    "Machine Learning"
  ];

  const projects = [
    {
      title: "Sales Performance Analysis",
      description: "Analyzed 5 years of sales data to identify trends and opportunities, resulting in 25% revenue increase.",
      tags: ["Python", "Pandas", "Tableau"]
    },
    {
      title: "Customer Segmentation",
      description: "Developed customer segments using clustering algorithms to improve marketing targeting by 40%.",
      tags: ["R", "Machine Learning", "Power BI"]
    },
    {
      title: "Supply Chain Optimization",
      description: "Optimized inventory levels using predictive analytics, reducing costs by 15%.",
      tags: ["Python", "SQL", "Excel"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Data Analyst Portfolio
            </h1>
            <p className="text-xl text-secondary mb-8">
              Transforming raw data into actionable insights
            </p>
            <Button asChild className="bg-accent hover:bg-accent/90">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="justify-center py-2">
                {skill}
              </Badge>
            ))}
          </div>
          <div className="mt-12 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#0EA5E9" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-4">{project.title}</h3>
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary mb-6">
              With over 5 years of experience in data analysis, I specialize in transforming complex datasets into clear, actionable insights. My expertise spans across various industries, helping businesses make data-driven decisions.
            </p>
            <p className="text-secondary">
              I'm passionate about finding patterns in data and creating compelling visualizations that tell meaningful stories.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <Card className="p-6">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Name</label>
                  <input type="text" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Email</label>
                  <input type="email" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Message</label>
                  <textarea className="w-full p-2 border rounded-md h-32"></textarea>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90">Send Message</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
