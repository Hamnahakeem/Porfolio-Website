
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import ClientFeedback from '@/components/ClientFeedback';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-purple bg-purple-blur bg-cover bg-fixed bg-center flex flex-col">
      <Navigation />
      <HeroSection />
      <ExpertiseSection />
      <ClientFeedback />
      <ContactSection />
    </div>
  );
};

export default Index;
