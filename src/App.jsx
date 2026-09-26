import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Services from './services.jsx'
import Footer from './Footers.jsx'
import './App.css'
import BookingForm from './BookingForm.jsx' 

const Service = [
  { nom: "Coupe cheveux", prix: 50 },
  { nom: "Rasage", prix: 30 },
  { nom: "Coloration", prix: 80 },
  { nom: "Coupe + Barbe", prix: 70 },
  { nom: "coupe professional for ilyass", prix: 200 },
]

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <h2 style={{textAlign: 'center', padding: '20px'}}>Services dyalna</h2>
      <div className="services-container">
        {Service.map((services, index) => (
          <Services key={index} nom={services.nom} prix={services.prix} />
        ))}
      </div>
      <BookingForm/>
      <Footer />
    </div>
  )
}

export default App