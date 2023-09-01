import './App.css';
import Contact from './Component/Coantact/Contact';
import Hero from './Component/Hero/Hero';
import Nav from './Component/Nav/Nav';
import Skills from './Component/Skills/Skills';
import Work from './Component/Work/Work';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
