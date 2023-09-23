import { useState, useEffect } from 'react'
import Header from "./Header"
import ProductListing from "./ProductListing"
import AddForm from "./AddForm"
import { getProducts, createProduct, editProduct, deleteProduct } from "../services/products"

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts()
      setProducts(data)
    }
    fetchProducts()
  }, [])

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
    const product = {
      title: productDetails.newTitle,
      price: productDetails.newPrice,
      quantity: productDetails.newQuantity
    }
    console.log(product)
    try {
      const data = await editProduct(id, product)
      console.log(data)
      console.log(products)
      // setProducts(data)
    } catch (e) {
      console.log(e)
    }
  }


  return (
    <div className="app">
      <Header />
      <main>
        <ProductListing
          products={products}
          handleEditProduct={handleEditProduct}
          handleDeleteProduct={handleDeleteProduct}
        />
        <AddForm onFormSubmit={handleFormSubmit} />
      </main>
    </div>
  )
}

export default App
