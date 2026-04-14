import React, { useState } from 'react'
import '../../assets/Styles/addproducts.css'
import axios from 'axios'



const AddProducts = () => {

    let [newproducts, setNewProducts] = useState({
        title: "",
        price: null,
        description: "",
        category: "",
        image: "",
        rating: {
            rate: null,
            count: null
        }

    })

    // let handleInput = (e) => {
    //     let keyName = e.target.name
    //     let KeyValue = e.target.value
    //     console.log(keyName, KeyValue)

    //     setNewProducts({ ...newproducts, [keyName]: KeyValue })
    // }

    let handleInput = (e) => {
        let keyName = e.target.name;
        let KeyValue = e.target.value;

        // If user is updating nested rating fields
        if (keyName === "rate" || keyName === "count") {
            setNewProducts({
                ...newproducts,
                rating: {
                    ...newproducts.rating,
                    [keyName]: KeyValue
                }
            });
        }
        // For normal fields
        else {
            setNewProducts({
                ...newproducts,
                [keyName]: KeyValue
            });
        }
    };

    let handleSubmit = async () => {
        let bool = window.confirm("Do you want to add this product to cart....?")
        if (bool) {
            axios.post(`http://localhost:4000/products`, newproducts)
            alert("succesfully added new product")

        }
        else {
            alert("item not added to the card")

        }
    }


    return (
        <>
            <div className="addproducts">
                <h1>Add Product</h1>
                <div className="container">
                    <form >
                        <div className="inputs">

                            <input
                                type='text'
                                placeholder='Enter the Title Name'
                                name="title"
                                value={newproducts.title}
                                onChange={handleInput}
                            />

                            <input
                                type='number'
                                placeholder='Enter the price in $'
                                name="price"
                                value={newproducts.price}
                                onChange={handleInput}

                            />
                            <input type="text" placeholder="Enter the description"
                                name="description"
                                value={newproducts.description}
                                onChange={handleInput} />

                            <select name="category" value={newproducts.category} onChange={handleInput}>
                                <option value="">----Select category---</option>
                                <option value="men's clothing">men's clothing</option>
                                <option value="jewelery">Jewelery</option>
                                <option value="electronics">electronices</option>
                                <option value="women's clothing">women's clothing</option>
                            </select>

                            <input type="text"
                                placeholder='Enter Image URL'
                                name="image"
                                value={newproducts.image}
                                onChange={handleInput} />


                            <input
                                type="text"
                                placeholder="Enter rating of item"
                                name="rate"
                                value={newproducts.rating.rate}
                                onChange={handleInput}
                            />



                            <input
                                type="text"
                                placeholder="Enter the count"
                                name="count"
                                value={newproducts.rating.count}
                                onChange={handleInput}
                            />
                            <br />

                            <button className='add' onClick={handleSubmit} Styles="color=red">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddProducts
