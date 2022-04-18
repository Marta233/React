import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Image from './components/Image';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
       <main className="cv-app-container">
            <div className="">
                <Image />
                <Contact />
                <Skills />
            </div>
            <div className="cv-app-right-sec">
                <About />
                <Experience />
                <Education />
            </div>
       </main>
    </div>
  );
}

export default App;
