import React from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Exchanges from './components/Exchanges'
import Coins from './components/Coins'
import CoinDetail from './components/CoinDetail'
import Header from './components/Header'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Exchanges/>} />
      <Route path='/coins' element={<Coins/>} />
      <Route path='/coins/:id' element={<CoinDetail/>} />
      
    </Routes>
  )
}
