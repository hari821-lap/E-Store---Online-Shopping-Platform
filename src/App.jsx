import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import './App.css'
import AdminPortal from './Components/Admin/AdminPortal'
const App = () => {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            
            <Route  element={<LandingPage />}path="/" />
            <Route  element={<AdminPortal/>}path='/adminportal/*'></Route>
          </Routes>
        </BrowserRouter>
       
      </div>
    </>
  )
}

export default App
