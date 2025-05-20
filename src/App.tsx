import Navbar from './components/Navbar'
import Landing from './Landing'
import About from './About'
import Skills from './Skills'
import Experiences from './Experiences'
import Projects from './Projects'
import Contacts from './Contacts'
import './App.css'

function App() {
  return (
    <div >
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Contacts />
      <footer className='text-center bg-secondary text-black dark:bg-dark-secondary'>
        <h3 className='text-black font-bold'>NIGEL</h3>
        <p className='text-black'>© Nigel Lim. All rights reserved 2025.</p>
      </footer>
    </div>
  )
}

export default App
