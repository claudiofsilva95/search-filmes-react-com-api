import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import './Favoritos.css'
import { toast } from "react-toastify"



export default function () {
  const [ filmes, setFilmes] = useState([])

  useEffect(()=>{
    const minhaLista = localStorage.getItem('filmes')
    setFilmes(JSON.parse(minhaLista) || [])

  }, [])

  const handleDelete = (id) => {
    let filtroFilmes = filmes.filter((filme) => {
      return (filme.id !== id)
    })
    setFilmes(filtroFilmes)
    localStorage.setItem('filmes', JSON.stringify(filtroFilmes))
    toast.success(`Filme exluído com sucesso`)
  }

  return (


    <div className="meus-filmes">
      <h1> Meus Filmes </h1>

      {
        filmes.length === 0 && (
          <div>
            <span>Sua lista de favoritos está vazia...</span>
            <Link to='/'>Voltar para a lista de filmes</Link>
          </div>
        )
      }
      <ul>      

        {
          filmes.map((filme) => {
            return (
              <li className="lista" key={filme.id}>
                <span>{filme.nome}</span>
                <div>
                  <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                  <button onClick={() => handleDelete(filme.id)}>Excluir</button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}