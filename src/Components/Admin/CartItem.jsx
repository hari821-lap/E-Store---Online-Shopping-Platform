import React, { useEffect, useState } from 'react'
import '../../assets/Styles/cartitem.css'
import { getCart, removeCartItem } from '../../utils/localData'

const CartItem = () => {

    let [cardItem, setCartItem] = useState([])
    let fetchCart = () => {
        setCartItem(getCart())
    }

    useEffect(() => {
        fetchCart()

    }, [])
    let handledelete = (id) => {
        let bool = window.confirm('Do you want to delete this product?')
        if (bool) {
            const updated = removeCartItem(id)
            setCartItem(updated)
            alert('Product deleted successfully')
        } else {
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
