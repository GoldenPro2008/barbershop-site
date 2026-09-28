import { useState } from 'react'

function Register() {
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    fetch('http://localhost/barbershop-api/register.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nom, email, password })
    })
      .then(response => response.json())
      .then(data => {
        setMessage(data.success || data.error)
      })
      .catch(() => setMessage('Chi mochkil w9e3 f connexion'))
  }

  return (
    <div className="auth-form">
      <h2>Créer un compte</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Smiytek" value={nom} onChange={(e) => setNom(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">S'inscrire</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default Register