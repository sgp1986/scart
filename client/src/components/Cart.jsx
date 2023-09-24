import axios from "axios"
import { useState } from "react"

const Cart = ({cart}) => {

  const displayedCart =() => {
    if (cart.length === 0) {
      return <EmptyCart />
    } else {
      return <NonEmptyCart cart={cart} />
    }
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {displayedCart()}
      <div className="checkout-button">
        <button className="checkout" disabled>Checkout</button>
        </div>
    </div>
  )
}

const EmptyCart = () => {
  return (
    <>
      <p>Your cart is empty.</p>
      <p>Total: $0.00</p>
    </>
  )
}

const NonEmptyCart = ({cart}) => {
  const [total, setTotal] = useState(0)
  
  const calculateTotal = () => {
    const getTotal = () => {
      let sum = 0
      cart.forEach(item => {
        sum += item.price
      })
      setTotal(sum)
    }
    getTotal()
    return total
  }  

  return (
    <>
      <table className="cart-items">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => 
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="total">Total: ${calculateTotal}</td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default Cart