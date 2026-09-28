import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [user, setUser] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()

    fetch('http://localhost/barbershop-api/login.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setMessage(data.success)
          setUser(data.user)
        } else {
          setMessage(data.error)
          setUser(null)
        }
      })
      .catch(() => setMessage('Chi mochkil w9e3 f connexion'))
  }

  return (
    <div className="auth-form">
      <h2>Se connecter</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Se connecter</button>
      </form>
      {message && <p>{message}</p>}
      {user && <p>Bienvenue {user.nom}! 👋</p>}
    </div>
  )
}

export default Login