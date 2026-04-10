import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Bazar, { Informacoes } from './Bazar'
import Bazares from './Bazares'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/bazar/:id' element={<Bazar />} />
      <Route path='/bazar/:id' element={<Informacoes />} />
      <Route path='/bazares/' element={<Bazares />} />
    </Routes>
  )
}
