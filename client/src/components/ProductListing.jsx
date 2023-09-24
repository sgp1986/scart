import Product from "./Product"



const ProductListing = ({ products, handleEditProduct, handleDeleteProduct, handleAddToCart }) => {
  
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map(product =>
          <li className="product" key={product._id}>
            <Product 
              id={product._id}
              title={product.title}
              price={product.price}
              quantity={product.quantity}
              handleEditProduct={handleEditProduct}
              handleDeleteProduct={handleDeleteProduct}
              handleAddToCart={handleAddToCart}
            />
          </li>
          )}       
      </ul>
    </div>
  )
}

export default ProductListing