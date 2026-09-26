import { useState } from 'react'

function BookingForm() {
  const [nom, setNom] = useState('')
  const [telephone, setTelephone] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Merci ${nom}! Ghadi ncontactouk f ${telephone}`)
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3>7jz Rendez-vous</h3>
      <input
        type="text"
        placeholder="Smiytek"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Numéro dyal Telephone"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
      />
      <button type="submit">Réserver</button>
    </form>
  )
}

export default BookingForm