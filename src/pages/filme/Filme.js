import './Filme.css'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'


export default function Filme() {

  const history = useNavigate()


  const { id } = useParams()

  const [filme, setFilme] = useState([])

  const [ loading, setLoading] = useState(true)

  useEffect(()=> {

    const loadFilmes = async () => {
      const response = await api.get(`r-api/?api=filmes/${id}`)

      if(response.data.length === 0){
        // Tentou acessar com um id que nao existe... voltar para home
        history('/')
        return
      }


      setFilme(response.data)
      setLoading(false)
    } 
    loadFilmes()

    return () => {
      console.log('componente desmontado')
    }

  }, [id, history])

const salvarFilme = () => {
  const minhaLista = localStorage.getItem('filmes')
  let filmesSalvos = JSON.parse(minhaLista) || []

  // se tiver ja salvo

  const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

  if (hasFilme) {
    toast.error(`Você já tem esse filme salvo`)
    return
    // Para a execução
  }

  filmesSalvos.push(filme)
  localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
  toast.success('Filme salvo com sucesso')

}


  if(loading) {
    return(
      <div className='filme-info'>
        <h1>Carregando Filme...</h1>
      </div>
    )
  }

  return (
    <div className='filme-info'>
      <h1>{ filme.nome } </h1>
      <img src={ filme.foto } alt={filme.nome} />
      <h3>Sinopse</h3>
      <p>{filme.sinopse}</p>
      
      <div className='botoes'>
        <button onClick={ salvarFilme }> Salvar</button>
        <button>

          <a href={`https://www.youtube.com/results?search_query=${filme.nome}+trailer`}  target='blank'>
            Trailer
          </a>
        </button>
      </div>

    </div>
  )
}