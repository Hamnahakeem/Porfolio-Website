
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-purple bg-purple-blur bg-cover bg-fixed bg-center flex flex-col">
      <Navigation />
      <HeroSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
