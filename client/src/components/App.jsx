import { useState, useEffect } from 'react'
import Header from "./Header"
import ProductListing from "./ProductListing"
import AddForm from "./AddForm"
import { getProducts, createProduct, deleteProduct } from "../services/products"

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
    const removed = products.filter(prod => prod._id != id)
    await deleteProduct(id)
    setProducts(removed)
  }


  return (
    <div className="app">
      <Header />
      <main>
        <ProductListing products={products} onDeleteClick={handleDeleteProduct} />
        <AddForm onFormSubmit={handleFormSubmit} />
      </main>
    </div>
  )
}

export default App
