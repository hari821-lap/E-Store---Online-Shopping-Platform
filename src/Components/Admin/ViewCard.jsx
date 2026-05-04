import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../../assets/Styles/viewcard.css'
import { getProductById, getCart, addCartItem } from '../../utils/localData'

const ViewCard = () => {


    let params = useParams()
    let productid = params.id
    let [card, setCard] = useState({});
    let Navigate = useNavigate()

    let fetchApi = () => {
        const productData = getProductById(productid)
        setCard(productData || {})
    }
    useEffect(() => {
        fetchApi()
    }, [productid])
    // console.log(card)

    let { id, title, price, image, rating, category, description } = card
    console.log(card)

    let addtoCard = () => {
        let bool = window.confirm("Do you want to add this product to cart?")
        if (bool) {
            const existingCart = getCart()
            const alreadyExists = existingCart.some((item) => item.id?.toString() === card.id?.toString())
            if (alreadyExists) {
                alert('This product is already in the cart')
                return
            }
            addCartItem(card)
            alert("Successfully added item to the cart")
        } else {
            alert("Item not added to the cart")
        }
    }
    return (
        <div className="viewcard">
            <div className="viewcard-card">

                <div className="viewcard-left">

                    <img src={image} alt={title} />
                </div>

                <div className="viewcard-right">
                    <h1>{title}</h1>
                    <div className="viewcard-price">₹ {price}</div>

                    <p>Rating: ⭐ {rating?.rate}</p>
                    <p>Category: {category}</p>
                    <p className='desc'>{description}</p>


                    <button className="viewcard-btn" onClick={addtoCard}>Add to Cart</button>
                    <button title='back' className='arrow' onClick={() => { Navigate(`/adminportal/products`) }}>Back</button>
                </div>

            </div>
        </div>


    )
}

export default ViewCard
