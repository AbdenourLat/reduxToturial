import { useTitle } from "../hooks/useTitle";
import { useSelector } from "react-redux";
import { CartCard } from "../components";

export const Cart = () => {
  useTitle("Cart");
  
  const products = useSelector(state => state.cartState.cartList);
  const totalPrice = useSelector(state => state.cartState.total);

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length} && total : {totalPrice}$</h1>
        { products.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
