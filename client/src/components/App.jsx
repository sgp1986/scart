import { useState, useEffect } from 'react'
import Header from "./Header"
import ProductListing from "./ProductListing"
import AddForm from "./AddForm"
import { getProducts, createProduct, editProduct, deleteProduct } from "../services/products"
import axios from "axios"

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    const fetchCart = async () => {
      const { data } = await axios.get("/api/cart")
      setCart(data)
    }
    fetchCart()
  }, [])

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts()
      setProducts(data)
    }
    fetchProducts()
  }, [])

  const handleAddToCart = async (e, id) => {
    e.preventDefault()
    try {
      const {data} = await axios.post("/api/add-to-cart", {productId: id})
      const product = data.product
      const item = data.item
      item.price = Math.round(item.price * item.quantity * 100) / 100
      console.log(item)
      const updatedProducts = products.map(p => p._id === id ? product : p)
      const updatedCart = cart.map(i => i.productId === id ? item : i)
      setProducts(updatedProducts)
      setCart(updatedCart)
    } catch (e) {
      console.log(e)
    }
  }

  const handleCheckout = async (e) => {
    e.preventDefault()
    try {

    }
  }

  const handleFormSubmit = async (newProduct, callback) => {
    try {
      const data = await createProduct(newProduct)
      setProducts(products.concat(data))
      if (callback) {
        callback()
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleDeleteProduct = async (e, id) => {
    e.preventDefault()
    try {
      const removed = products.filter(prod => prod._id != id)
      await deleteProduct(id)
      setProducts(removed)
    } catch (e) {
      console.log(e)
    }
  }

  const handleEditProduct = async (e, {id, ...productDetails}) => {
    e.preventDefault()
    console.log(id)
    product = {
      title: productDetails.newTitle,
      price: productDetails.newPrice,
      quantity: productDetails.newQuantity
    }
    try {
      const data = await editProduct(id, product)
      const updates = products.map(p => p._id == id ? data : p)
      setProducts(updates)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div id="app">
      <Header cart={cart} />
      <main>
        <ProductListing
          products={products}
          handleEditProduct={handleEditProduct}
          handleDeleteProduct={handleDeleteProduct}
          handleAddToCart={handleAddToCart}
        />
        <AddForm onFormSubmit={handleFormSubmit} />
      </main>
    </div>
  )
}

export default App
