import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AssistSection from './components/AssistSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import Projects from './components/Projects';
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
      </main>
    </>
  )
}

export default App;
