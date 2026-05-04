import productsData from '../data/storedata.json'

const PRODUCTS_KEY = 'reactproject_products'
const CART_KEY = 'reactproject_cart'

const readStorage = (key) => {
    try {
        const value = localStorage.getItem(key)
        return value ? JSON.parse(value) : null
    } catch (error) {
        console.error('Local storage read error', error)
        return null
    }
}

const writeStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.error('Local storage write error', error)
    }
}

const getInitialProducts = () => {
    return productsData.products || []
}

const getInitialCart = () => {
    return productsData.carditem || []
}

const getProducts = () => {
    const stored = readStorage(PRODUCTS_KEY)
    if (stored && Array.isArray(stored)) return stored
    const initial = getInitialProducts()
    writeStorage(PRODUCTS_KEY, initial)
    return initial
}

const getCart = () => {
    const stored = readStorage(CART_KEY)
    if (stored && Array.isArray(stored)) return stored
    const initial = getInitialCart()
    writeStorage(CART_KEY, initial)
    return initial
}

const saveProducts = (products) => {
    writeStorage(PRODUCTS_KEY, products)
}

const saveCart = (cart) => {
    writeStorage(CART_KEY, cart)
}

const createId = () => {
    return Math.random().toString(36).substring(2, 9) + Date.now().toString(36)
}

const getProductById = (id) => {
    return getProducts().find((item) => item.id?.toString() === id?.toString()) || null
}

const addProduct = (product) => {
    const products = getProducts()
    const newProduct = {
        ...product,
        id: product.id ? product.id.toString() : createId(),
        rating: {
            rate: product.rating?.rate || 0,
            count: product.rating?.count || 0,
        },
    }
    const updated = [...products, newProduct]
    saveProducts(updated)
    return updated
}

const updateProduct = (product) => {
    const products = getProducts()
    const updated = products.map((item) =>
        item.id?.toString() === product.id?.toString() ? { ...item, ...product } : item
    )
    saveProducts(updated)
    return updated
}

const deleteProduct = (id) => {
    const products = getProducts()
    const updated = products.filter((item) => item.id?.toString() !== id?.toString())
    saveProducts(updated)
    return updated
}

const addCartItem = (item) => {
    const cart = getCart()
    const exists = cart.some((cartItem) => cartItem.id?.toString() === item.id?.toString())
    const updated = exists ? cart : [...cart, item]
    saveCart(updated)
    return updated
}

const removeCartItem = (id) => {
    const cart = getCart()
    const updated = cart.filter((item) => item.id?.toString() !== id?.toString())
    saveCart(updated)
    return updated
}

const resetToOriginal = () => {
    localStorage.removeItem(PRODUCTS_KEY)
    localStorage.removeItem(CART_KEY)
    // Data will be reloaded from initial on next getProducts/getCart call
}

export {
    getProducts,
    getCart,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
    addCartItem,
    removeCartItem,
    resetToOriginal,
}
