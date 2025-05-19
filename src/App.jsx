import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './Components/Layout'
import Home from './Pages/Home/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Layout> <Home/> </Layout>}/>
    </Routes>
  )
}

export default App
