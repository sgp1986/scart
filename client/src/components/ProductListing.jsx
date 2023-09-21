import Product from "./Product"



const ProductListing = ({ products, onDeleteClick }) => {
  
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map(product => 
          <Product 
            id={product._id}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
            onDeleteClick={onDeleteClick}
          />
          )}       
      </ul>
    </div>
  )
}

export default ProductListing