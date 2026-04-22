import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../assets/Styles/cartitem.css'
import productsData from '../../data/storedata.json'

const CartItem = () => {

    let [cardItem, setCartItem] = useState([])
    let fetchCart = async () => {
        // let apifetch = await axios.get(`http://localhost:4000/carditem`)
        setCartItem(productsData.carditem)
    }

    useEffect(() => {
        fetchCart()

    }, [])
    let handledelete = async (id) => {
        let bool = window.confirm('Do you want to this product')
        if (bool) {
            await axios.delete(`http://localhost:4000/carditem/${id}`)
            alert('product deleted Succesfully')
        }
        else {
            alert('Product not deleted')
        }
    }
    console.log(cardItem)
    return (
        <>
            <div className="cartitem">
                <h1>Cart Item</h1>

                <div className="container">
                    <table>
                        <tr>
                            <thead>

                            </thead>
                        </tr>
                        <tbody>
                            {cardItem.map((elem, index) => {
                                let { id, title, price, description, category, image, rating } = elem
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{title}</td>
                                        <td><img src={image} alt="" /></td>
                                        <td>{category}</td>
                                        <td><button onClick={() => { handledelete(id) }} >Delete</button></td>
                                    </tr>

                                )


                            })}

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default CartItem
