import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../../assets/Styles/viewcard.css'

const ViewCard = () => {

    
    let params = useParams()
    let productid = params.id
    let [card, setCard] = useState({});
    let Navigate = useNavigate()

    let fetchApi = async () => {
        let productData = await axios.get(`http://localhost:4000/products/${productid}`)
        await setCard(productData.data)
    }
    useEffect(() => {
        fetchApi()
    }, [])
    // console.log(card)

    let { id, title, price, image, rating, category, description} = card
    console.log(card)

    let addtoCard = async ()=>{
        let bool =window.confirm("Do you want to add this product to cart....?")
        if(bool){
            axios.post(`http://localhost:4000/carditem`,card)
            alert("succesfully added item to the card")
        }
        else{
            alert("item not added to the card")

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
