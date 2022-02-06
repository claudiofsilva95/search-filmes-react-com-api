import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import './Home.css'
import api from '../../services/api'

export default function Home() {
  const [ filmes, setFilmes] = useState([])
  const [ loading, setLoading] = useState(true)


  useEffect(()=> {
    const loadFimes = async () => {
      const response = await api.get('r-api/?api=filmes')
      setFilmes(response.data)
      setLoading(false)
    }
    loadFimes()
  }, [])

  if(loading) {
    return(
      
      <h1>Buscando filmes...</h1>
    )
  }

  return (
    <div className="container">

      <div className="lista-filmes">
      {
        filmes.map((filme)=> {
          return (
            <article key={filme.id}>
              <strong> {filme.nome} </strong>
              <img src={filme.foto} alt={filme.nome} />
              <p>{filme.sinopse}</p>
              <Link className="btn" to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
            )
        })
      }
        </div>
    </div>
  )
}