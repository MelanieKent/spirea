import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './pages/Hero';
import { About } from './pages/About';
import { PrototypeV1 } from './pages/PrototypeV1';
import { StrategicApplications } from './pages/StrategicApplications';
import { Founder } from './pages/Founder';
import { Contact } from './pages/Contact';
import './App.css';

function App() {
  useEffect(() => {
    const images = [
      '/hero-background-founder.png',
      '/about-background-p1.png',
      '/about-background-p2.png',
      '/prototype-v1-background-p1.png',
      '/prototype-v1-background-p2.png',
      '/strategic-applications-background.png',
      '/founder-background.png',
      '/contact-background.png'
    ];

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="app text-lg sm:text-xl">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/prototype-v1" element={<PrototypeV1 />} />
        <Route path="/strategic-applications" element={<StrategicApplications />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
