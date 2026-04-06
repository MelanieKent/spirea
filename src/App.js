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
      '../public/hero-background-founder.png',
      '../public/hero-background-founder-mobile.png',
      '../public/about-background-p1.png',
      '../public/about-background-p1-mobile.png',
      '../public/about-background-p2.png',
      '../public/prototype-v1-background-p1.png',
      '../public/prototype-v1-background-p1-mobile.png',
      '../public/prototype-v1-background-p2.png',
      '../public/strategic-applications-background.png',
      '../public/strategic-applications-background-mobile.png',
      '../public/founder-background.png',
      '../public/founder-background-mobile.png',
      '../public/contact-background.png',
      '../public/cycle.png',
      '../public/headshot.png'
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
