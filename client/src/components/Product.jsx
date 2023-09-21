import { deleteProduct } from "../services/products"

const Product = ({id, title, price, quantity, onDeleteClick}) => {
  return (
    <>
      <li className="product" key={id}>
        <ProductDetails 
          id={id}
          title={title}
          price={price}
          quantity={quantity}
          onDeleteClick={onDeleteClick}
        />
      </li>
    </>
  )
}

const ProductDetails = ({id, title, price, quantity, onDeleteClick}) => {

  const deleteProduct = () => {
    onDeleteClick(event, id)
  }

  return (
    <div className="product-details">
      <h3>{title}</h3>
      <p className="price">${price}</p>
      <p className="quantity">{quantity} left in stock</p>
      <div className="actions product-actions">
        <button className="add-to-cart">Add to Cart</button>
        <button className="edit">Edit</button>
      </div>
      <button className="delete-button" onClick={deleteProduct}><span>X</span></button>
    </div>
  )
}

export default Product