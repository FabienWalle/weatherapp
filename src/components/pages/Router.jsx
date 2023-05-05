import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Tide from './Tide'
import Weather from './Weather'
import Header from '../header/Header'

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/tide" element={<Tide />} />
      </Routes>
    </>
  )
}

export default Router