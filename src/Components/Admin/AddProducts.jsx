import React, { useEffect, useState } from 'react'
import '../../assets/Styles/addproducts.css'
import { useNavigate, useParams } from 'react-router-dom'
import { addProduct, getProductById, updateProduct } from '../../utils/localData'

const AddProducts = () => {

    const params = useParams()
    const navigate = useNavigate()
    let [newproducts, setNewProducts] = useState({
        id: "",
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rating: {
            rate: "",
            count: ""
        }

    })

    useEffect(() => {
        if (params.id) {
            const existing = getProductById(params.id)
            if (existing) {
                setNewProducts({
                    ...existing,
                    price: existing.price?.toString() || "",
                    rating: {
                        rate: existing.rating?.rate?.toString() || "",
                        count: existing.rating?.count?.toString() || ""
                    }
                })
            }
        }
    }, [params.id])

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

    let handleSubmit = (e) => {
        e.preventDefault()
        let bool = window.confirm(params.id ? "Do you want to save changes to this product?" : "Do you want to add this product?")
        if (!bool) {
            alert("Action cancelled")
            return
        }

        const preparedProduct = {
            ...newproducts,
            price: Number(newproducts.price) || newproducts.price,
            rating: {
                rate: Number(newproducts.rating.rate) || newproducts.rating.rate,
                count: Number(newproducts.rating.count) || newproducts.rating.count
            }
        }

        if (params.id) {
            updateProduct(preparedProduct)
            alert('Product updated successfully')
        } else {
            addProduct(preparedProduct)
            alert('Product added successfully')
        }

        navigate('/adminportal/products')
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

                            <button className='add' onClick={handleSubmit} type='submit'>
                                {params.id ? 'Update Product' : 'Add Product'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddProducts
