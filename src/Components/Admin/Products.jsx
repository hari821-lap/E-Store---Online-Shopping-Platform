import React, { useEffect, useState } from 'react'
import '../../assets/Styles/products.css'
import { useNavigate } from 'react-router-dom'
import { getProducts, deleteProduct as removeProductFromStore } from '../../utils/localData'

const Products = () => {
  let [products, setProduct] = useState([])
  let navigate = useNavigate()
  let fetchApi = () => {
    setProduct(getProducts())
  }

  useEffect(() => {
    fetchApi()
  }, [])
  // console.log(products)

  let Viewmore = (id) => {
    navigate(`/adminportal/viewcard/${id}`)
  }

  let deleteProduct = (id) => {
    let bool = window.confirm('Do you want to delete this product?')
    if (bool) {
      const updatedProducts = removeProductFromStore(id)
      setProduct(updatedProducts)
      alert('Item deleted')
    } else {
      alert('Item not deleted')
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
                  <button className='edit' title='Edit' onClick={() => { navigate(`/adminportal/addproducts/${id}`) }}>Edit</button>
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
