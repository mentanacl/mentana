import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSignUp = async () => {
    setMessage('Registrando...')
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) setMessage(error.message)
    else setMessage('Usuario registrado, revisa tu email')
  }

  const handleLogin = async () => {
    setMessage('Iniciando sesión...')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setMessage(error.message)
    else setMessage('Login exitoso')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleLogin()
  }

  return (
    <>
      <Head>
        <title>Registro - Mentana</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>

      <div className="page">
        <div className="container">
          <img src="logo.png" alt="Logo" width="100" height="100" />
          <br /><br />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ marginBottom: '15px' }}
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <div className="full-width">
              {/* Botón principal: envía el formulario (login) */}
              <button type="submit" className="btn btn-primary">Inicia Sesión</button>
            </div>
          </form>
		  
		  

          <p className="message" role="status" aria-live="polite">{message}</p>
<p>¿Ya tienes una cuenta? <Link href="/registro">Regístrate</Link></p>
          
		  
        </div>

        <footer>
          <strong>&copy; 2025 Mentana &#x1F9E0;</strong>
        </footer>
      </div>

  
      <style jsx global>{`
        :root {
          --accent-primary: #56dbc4;
          --accent-secondary: #00bcd4;
          --text-light: #e0e0e0;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body, html, #__next {
          height: 100%;
		  
        }

        .page {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(to right, #23bcd7, #112244);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          margin: 0;
          color: #fff;
        }

        .container {
          background: rgba(255, 255, 255, 0.1);
          padding: 30px;
          border-radius: 16px;
          width: 95%;
          max-width: 450px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          overflow-y: auto;
          max-height: 95vh;
          text-align: center;
        }

        form {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .form-group {
          flex: 1 1 45%;
        }

        .full-width {
          flex: 1 1 100%;
        }

        input, select {
          width: 100%;
          padding: 12px;
          margin-top: 6px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 16px;
          background: rgba(0, 0, 0, 0.2);
          color: #fff;
          box-sizing: border-box;
          appearance: none;
          font-size: 14px;
        }

        select option { color: #000; }
        input::placeholder, select { color: rgba(255, 255, 255, 0.8); }

        input:focus, select:focus {
          background: rgba(255, 255, 255, 0.3);
          outline: none;
        }

        .btn {
          display: inline-block;
          padding: 12px 22px;
          border-radius: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: background .3s ease, color .3s ease, border .3s ease;
          border: none;
          cursor: pointer;
        }

        .btn-primary {
          width: 180px;
          text-align: center;
          margin: 5px;
          padding: 12px 0;
          border-radius: 16px;
          font-weight: bold;
          transition: background 0.3s ease;
          background: var(--accent-primary);
          color: #141e30;
        }

        .btn-primary:hover {
          background: #56dbc4;
          color: #fff;
        }

        p {
          margin-top: 15px;
          font-size: 14px;
        }

        a {
          color: #f999b7;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s;
        }

        .message {
          margin-top: 12px;
          font-size: 14px;
          color: #fff;
        }
		footer {
      text-align: center;
      font-size: 14px;
      color: #fff;
	  margin-top: 10px; /* Ajusta el valor según necesites */
    }
      `}</style>
    </>
  )
}
