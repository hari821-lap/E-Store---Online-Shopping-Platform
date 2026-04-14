import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../assets/Styles/products.css'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  let [products, setProduct] = useState([])
  let navigate = useNavigate()
  let fetchApi = async () => {
    let apidata = await axios.get("http://localhost:4000/products")
    await setProduct(apidata.data)
  }

  useEffect(() => {
    fetchApi()
  }, [])
  // console.log(products)

  let Viewmore = (id) => {
    navigate(`/adminportal/viewcard/${id}`)
  }

  let deleteProduct = async (id) => {
    let bool = window.confirm('Do you want to delete....!')
    if (bool) {
      await axios.delete(`http://localhost:4000/products/${id}`)
      alert('Item is deleted')
    }
    else {
      alert('Not deleted')
    }
  }
  return (
    <>
      <div className="products">
        <div className="heading">Product</div>
        <div className="container">
          {products.map((elem, index) => {
            let { id, title, price, image, rating, category } = elem
            return (
              <><div className="card" key={index}>
                <div className="category">{category}</div>
                <div className="image"><img src={image} alt='' /></div>


                <div className="title"> {title} </div>
                <div className="box">
                  <div className="rating">
                    <span>{rating.rate} ⭐</span>
                    <span>({rating.count})</span>
                  </div>
                  <div className="price">{Math.floor(price * 80)}.00/-</div>
                </div>

                <div className="btns">
                  <button className='view' title='view more' onClick={() => { Viewmore(id) }}>View</button>
                  <button className='delete' title='Delete' onClick={() => { deleteProduct(id) }}>Delete</button>
                </div>
              </div>

              </>


            )
          })}

        </div>
      </div>


    </>
  )
}

export default Products
