import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Products from './Products'
import CartItem from './CartItem'
import ViewCard from './ViewCard'
import AddProducts from './AddProducts'


const AdminPortal = () => {
  return (
    <>
    <div>
      <Navbar/>
      <Routes>
        
        <Route element={<Home/>} path='/'></Route>
        <Route element={<Products/>} path='/products'></Route>
        <Route element={<CartItem/>}path='/carditems'></Route>
        <Route element={<ViewCard/>} path='/viewcard/:id'></Route>
        <Route element={<AddProducts /> }path='/addproducts'></Route>
      </Routes>
      </div>
    </>
  )
}

export default AdminPortal

// npx json-server --watch src/data/storedata.json --port 4000
