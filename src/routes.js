import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Favoritos from './pages/favoritos/Favoritos'
import Filme from './pages/filme/Filme'
import Home from './pages/home/Home'
import NotFound from './pages/notfound/NotFound'

const Rotas = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/filme/:id' element={<Filme />}/>
        <Route exact path='/favoritos' element={<Favoritos />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
    </Router>
  )
}

export default Rotas