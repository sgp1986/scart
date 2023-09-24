import Cart from "./Cart"

const Header = ({cart}) => {
  return (
    <div>
      <header>
        <h1>The Shop!</h1>
        <Cart cart={cart} />
      </header>
    </div>
  )
}

export default Header