import NavBar from './components/NavBar'
import Blog from './sections/Blog'
import Clients from './sections/Clients'
import Customers from './sections/Customers'
import Demo from './sections/Demo'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Howto from './sections/Howto'
import Membership from './sections/Membership'
import Pixelgrade from './sections/Pixelgrade'
import Stats from './sections/Stats'

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Clients />
      <Membership />
      <Pixelgrade />
      <Stats />
      <Howto />
      <Customers />
      <Blog />
      <Demo />
      <Footer />
    </main>
  )
}

export default App
