import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function CuestionarioPage() {
  const [ansiedad, setAnsiedad] = useState(0)
  const [estres, setEstres] = useState(0)
  const [soledad, setSoledad] = useState(0)
  const [depresion, setDepresion] = useState(0)
  const [message, setMessage] = useState('')
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user))
  }, [])

  const handleSubmit = async () => {
    if (!user) {
      setMessage('Debes iniciar sesión primero')
      return
    }

    const { data, error } = await supabase.from('cuestionarios').insert([
      { usuario_id: user.id, ansiedad, estres, soledad, depresion }
    ])
    if (error) setMessage(error.message)
    else setMessage('Cuestionario guardado')
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Cuestionario</h1>
      <input type="number" placeholder="Ansiedad" value={ansiedad} onChange={e => setAnsiedad(Number(e.target.value))} />
      <input type="number" placeholder="Estrés" value={estres} onChange={e => setEstres(Number(e.target.value))} />
      <input type="number" placeholder="Soledad" value={soledad} onChange={e => setSoledad(Number(e.target.value))} />
      <input type="number" placeholder="Depresión" value={depresion} onChange={e => setDepresion(Number(e.target.value))} />
      <button onClick={handleSubmit}>Guardar</button>
      <p>{message}</p>
    </div>
  )
}
