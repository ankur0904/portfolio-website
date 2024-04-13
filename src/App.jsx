import './App.css';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <Experience />
        <Projects />
        <Footer />
    </div>
  );
}

export default App;
