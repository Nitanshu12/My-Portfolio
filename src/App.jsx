import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AssistSection from './components/AssistSection';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AssistSection />
      </main>
    </>
  )
}

export default App;
