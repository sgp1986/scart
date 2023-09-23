import { useState } from "react"

const AddForm = ({ onFormSubmit }) => {
  const [isFormShown, setIsFormShown] = useState(false)
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)

  const handleSubmit = e => {
    e.preventDefault()
    onFormSubmit({title, price, quantity}, reset)
  }

  const reset = () => {
    setTitle("")
    setPrice("")
    setQuantity("")
  }

  const handleShowForm = e => {
    e.preventDefault()
    setIsFormShown(!isFormShown)
  }

  return (
    <div className={isFormShown ? "add-form visible" : "add-form"}>
      <p><button className="add-product-button" onClick={handleShowForm}>Add A Product</button></p>
      <h3 >Add Product</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="product-name">Product Name:</label>
            <input
              type="text"
              id="product-name"
              name="product-name"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="product-price">Price:</label>
            <input
              type="number"
              id="product-price"
              name="product-price"
              min="0"
              step="0.01"
              value={price}
              onChange={e => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="product-quantity">Quantity:</label>
            <input
              type="number"
              id="product-quantity"
              name="product-quantity"
              min="0"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
              required
            />
          </div>
          <div className="actions form-actions">
            <button type="submit">Add</button>
            <button type="button" onClick={handleShowForm}>Cancel</button>
          </div>
        </form>
    </div>
  )
}

export default AddForm