import Product from "./Product"



const ProductListing = ({ products, handleEditProduct, handleDeleteProduct }) => {
  
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
            handleEditProduct={handleEditProduct}
            handleDeleteProduct={handleDeleteProduct}
          />
          )}       
      </ul>
    </div>
  )
}

export default ProductListing