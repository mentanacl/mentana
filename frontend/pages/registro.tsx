import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function RegistroPage() {
  const [usuario, setUsuario] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repetirPassword, setRepetirPassword] = useState('')
  const [edad, setEdad] = useState<number | ''>('')
  const [genero, setGenero] = useState('')
  const [educacion, setEducacion] = useState('')
  const [estadoCivil, setEstadoCivil] = useState('')
  const [region, setRegion] = useState('')
  const [comuna, setComuna] = useState('')
  const [message, setMessage] = useState('')

  const comunasPorRegion: Record<string, string[]> = {
    metropolitana: ["Santiago", "Puente Alto", "Maipú", "La Florida", "Las Condes", "Ñuñoa", "San Bernardo", "Pudahuel", "Recoleta", "Quilicura"],
    valparaiso: ["Valparaíso", "Viña del Mar", "Quilpué", "Villa Alemana", "San Antonio"],
    biobio: ["Concepción", "Talcahuano", "Chiguayante", "Los Ángeles", "Coronel"],
    araucania: ["Temuco", "Padre Las Casas", "Villarrica", "Angol"],
    ohiggins: ["Rancagua", "San Fernando", "Rengo"],
    maule: ["Talca", "Curicó", "Linares"],
    antofagasta: ["Antofagasta", "Calama", "Tocopilla"],
    coquimbo: ["La Serena", "Coquimbo", "Ovalle"],
    loslagos: ["Puerto Montt", "Osorno", "Castro"],
    tarapaca: ["Iquique", "Alto Hospicio"],
    atacama: ["Copiapó", "Vallenar"],
    aysen: ["Coyhaique", "Puerto Aysén"],
    magallanes: ["Punta Arenas", "Puerto Natales"],
    losrios: ["Valdivia", "La Unión"],
    aricayparinacota: ["Arica", "Putre"],
    ñuble: ["Chillán", "San Carlos"]
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()

    

    setMessage('Registrando...')

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          edad,
          genero,
          educacion,
          estado_civil: estadoCivil,
          region,
          comuna,
        }
      }
    })

    if (error) setMessage(error.message)
    else setMessage('Usuario registrado, revisa tu email')
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

          <form onSubmit={handleSignUp}>
            

            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Email" required
                value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="form-group">
              <input type="password" id="password" name="password" placeholder="Contraseña" required
                value={password} onChange={e => setPassword(e.target.value)} />
            </div>

           

            <div className="form-group">
              <input type="number" name="edad" placeholder="Edad" min="10" max="120" required
                value={edad} onChange={e => setEdad(Number(e.target.value))} />
            </div>

            <div className="form-group">
              <select name="genero" required value={genero} onChange={e => setGenero(e.target.value)}>
                <option value="">Género</option>
                <option>Masculino</option>
                <option>Femenino</option>
                <option>No binario</option>
                <option>Otro</option>
                <option>Prefiero no decirlo</option>
              </select>
            </div>

            <div className="form-group">
              <select name="educacion" required value={educacion} onChange={e => setEducacion(e.target.value)}>
                <option value="">Educación</option>
                <option>Básica incompleta</option>
                <option>Básica completa</option>
                <option>Media incompleta</option>
                <option>Media completa</option>
                <option>Educación técnica</option>
                <option>Universitaria incompleta</option>
                <option>Universitaria completa</option>
                <option>Postgrado</option>
              </select>
            </div>

            <div className="form-group">
              <select name="estado_civil" required value={estadoCivil} onChange={e => setEstadoCivil(e.target.value)}>
                <option value="">Estado Civil</option>
                <option>Soltero/a</option>
                <option>Casado/a</option>
                <option>Unión libre</option>
                <option>Separado/a</option>
                <option>Divorciado/a</option>
                <option>Viudo/a</option>
              </select>
            </div>

            <div className="form-group">
              <select name="region" required value={region} onChange={e => {
                setRegion(e.target.value)
                setComuna('')
              }}>
                <option value="">Región</option>
                {Object.keys(comunasPorRegion).map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <select name="comuna" required disabled={!region}
                value={comuna} onChange={e => setComuna(e.target.value)}>
                <option value="">Comuna</option>
                {region && comunasPorRegion[region]?.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="full-width">
              <p style={{ textAlign: 'center' }}>
                (*) Los datos demográficos solicitados en este formulario son para<br />analizar la estructura y evolución poblacional.
              </p><br />
              <button type="submit" className="btn btn-primary">Regístrate</button>
            </div>
          </form>

          <p>¿Ya tienes una cuenta? <Link href="/auth">Inicia sesión</Link></p>
          <p className="message" role="status" aria-live="polite">{message}</p>
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
          max-width: 700px;
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
        }footer {
      text-align: center;
      font-size: 14px;
      color: #fff;
	  margin-top: 10px; /* Ajusta el valor según necesites */
    }
      `}</style>
    </>
  )
}
