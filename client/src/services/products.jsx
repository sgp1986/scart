import axios from "axios"

export const getProducts = async () => {
  const { data } = await axios.get("/api/products")
  return data
}

export const createProduct = async (newProduct) => {
  const { data } = await axios.post("/api/products", { ...newProduct })
  return data
}

// update

export const deleteProduct = async (productId) => {
  const { data } = await axios.delete(`/api/products/${productId}`)
  return data
}