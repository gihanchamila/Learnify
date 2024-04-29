import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from './components/Features'
import Download from "./components/Download"
import About from "./components/About"
import Contact from "./components/Contact"


function App() {

  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Download />
      <About />
      <Contact />
    </div> 
    </>
  )
}

export default App
