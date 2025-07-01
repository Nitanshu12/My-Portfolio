import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AssistSection from './components/AssistSection';
import SkillsSection from './components/SkillsSection';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AssistSection />
        <SkillsSection />
      </main>
    </>
  )
}

export default App;
