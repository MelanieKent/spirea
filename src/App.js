import { Navbar } from './components/Navbar';
import { Hero } from './pages/Hero';
import { About } from './pages/About';
import { PrototypeV1 } from './pages/PrototypeV1';
import { StrategicApplications } from './pages/StrategicApplications';
import { Founder } from './pages/Founder';
import { Contact } from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div>
        <Hero />
        <About />
        <PrototypeV1 />
        <StrategicApplications />
        <Founder />
        <Contact />
      </div>
    </div>
  );
}

export default App;
