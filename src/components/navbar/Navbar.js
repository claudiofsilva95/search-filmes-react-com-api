import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <Link className='logo' to='/'>filmaria</Link>
      <Link className='favoritos' to='/favoritos'>Salvos</Link>
    </header>
  )
}