import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import WireframeSection from "./components/WireframeSection";
import HeroWireframe from "./components/HeroWireframe";
import ProblemWireframe from "./components/ProblemWireframe";
import FeaturesWireframe from "./components/FeaturesWireframe";
import ServicesWireframe from "./components/ServicesWireframe";
import TransformWireframe from "./components/TransformWireframe";
import ContactWireframe from "./components/ContactWireframe";
import { LanguageProvider } from "./components/LanguageContext";

function AppContent() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      {/* Main content with padding-top to account for fixed navbar */}
      <main className="pt-16">
        <WireframeSection id="hero" variant="gradient" animation="scaleIn" animationDelay={200}>
          <HeroWireframe />
        </WireframeSection>

        <WireframeSection id="problem" backgroundColor="bg-background" animation="fadeInLeft" animationDelay={100}>
          <ProblemWireframe />
        </WireframeSection>

        <WireframeSection id="features" variant="accent" animation="fadeInUp" animationDelay={150}>
          <FeaturesWireframe />
        </WireframeSection>

        <WireframeSection id="services" backgroundColor="bg-background" animation="fadeInRight" animationDelay={100}>
          <ServicesWireframe />
        </WireframeSection>

        <WireframeSection id="transform" variant="gradient" animation="bounceIn" animationDelay={200}>
          <TransformWireframe />
        </WireframeSection>

        <WireframeSection id="contact" backgroundColor="bg-background" animation="slideInBottom" animationDelay={150}>
          <ContactWireframe />
        </WireframeSection>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}