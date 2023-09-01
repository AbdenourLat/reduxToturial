import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {add, remove} from '../store/cartSlice';
import "./ProductCard.css";

export const ProductCard = ({product}) => {
  const products = useSelector(state => state.cartState.cartList);
  const dispatch =  useDispatch();
  const {id, name, price, image} = product;

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {
          !products.find(product => product.id === id) ? <button onClick={
            () => dispatch(add(product))
          } >Add To Cart</button> : <button onClick={
            () => dispatch(remove(product))
          } >Remove</button>
        }
      </div>
    </div>
  )
}
