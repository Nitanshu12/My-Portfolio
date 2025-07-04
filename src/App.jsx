import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AssistSection from './components/AssistSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import Projects from './components/Projects';
import ContactSection from './components/Contact';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AssistSection />
        <SkillsSection />
        <ExperienceSection />
        <Projects />
        <ContactSection />
      </main>
    </>
  )
}

export default App;
