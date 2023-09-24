import { useState } from "react"

const Product = ({id, title, price, quantity, handleEditProduct, handleDeleteProduct, handleAddToCart}) => {
  const [editableProduct, setEditableProduct] = useState(false)
  return (
    <>
      <ProductDetails 
        id={id}
        title={title}
        price={price}
        quantity={quantity}
        handleDeleteProduct={handleDeleteProduct}
        setEditableProduct={setEditableProduct}
        handleAddToCart={handleAddToCart}
      />
      <ProductEditForm
        id={id}
        title={title}
        price={price}
        quantity={quantity}
        editableProduct={editableProduct}
        setEditableProduct={setEditableProduct}
        handleEditProduct={handleEditProduct}
      />
    </>
  )
}

const ProductDetails = ({id, title, price, quantity, handleDeleteProduct, setEditableProduct, handleAddToCart}) => {

  const deleteProduct = () => {
    handleDeleteProduct(event, id)
  }

  const displayEditForm = () => {
    setEditableProduct(true)
  }

  const addToCart = () => {
    handleAddToCart(event, id)
  }

  return (
    <div className="product-details">
      <h3>{title}</h3>
      <p className="price">${price}</p>
      <p className="quantity">{quantity} left in stock</p>
      <div className="actions product-actions">
        <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
        <button className="edit" onClick={displayEditForm}>Edit</button>
      </div>
      <button className="delete-button" onClick={deleteProduct}><span>X</span></button>
    </div>
  )
}

const ProductEditForm = ({id, title, price, quantity, editableProduct, setEditableProduct, handleEditProduct}) => {
  const [newTitle, setNewTitle] = useState(title)
  const [newPrice, setNewPrice] = useState(price)
  const [newQuantity, setNewQuantity] = useState(quantity)

  const updateProduct = e => {
    handleEditProduct(event, {id, newTitle, newPrice, newQuantity})
    setEditableProduct(false)
  }

  const hideEditForm = () => {
    setEditableProduct(false)
  }

  return (
    <div className={ editableProduct ? "edit-form visible" : "edit-form"}>
      <h3>Edit Product</h3>
      <form onSubmit={updateProduct}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            aria-label="Product Name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={newPrice}
            onChange={e => setNewPrice(e.target.value)}
            aria-label="Product Price"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={newQuantity}
            onChange={e => setNewQuantity(e.target.value)}
            aria-label="Product Quantity"
          />
        </div>

        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button type="button" onClick={hideEditForm}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default Product