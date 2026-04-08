import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import PracticeAreasColumns from './Components/PracticeAreasColumns/PracticeAreasColumns';
import StrategicDifferentiators from './Components/StrategicDifferentiators/StrategicDifferentiators';
import About from './Components/About/About';
import GlobalPresence from './Components/GlobalPresence/GlobalPresence';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import WhatsAppFAB from './Components/WhatsAppFAB/WhatsAppFAB';

function App() {
  return (
    <div className="w-full min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <PracticeAreasColumns />
        <StrategicDifferentiators />
        <About />
        <GlobalPresence />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

export default App;
