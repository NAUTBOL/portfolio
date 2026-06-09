import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Projects />
      </main>
    </div>
  );
}

export default App;
