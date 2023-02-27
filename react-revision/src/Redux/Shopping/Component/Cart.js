import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeToCart, resetCart } from "../action/Action";

const Cart = () => {
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cartData);
  let amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);
  console.warn(amount);

  return (
    <div>
      <Link to="/">
        {" "}
        <button className="btn-1"> Home Page</button>
      </Link>
      <h1 style={{ padding: "20px" }}>Cart Page</h1>
      <div className="cart-page-container">
        <table>
          <thead className="thead">
            <tr>
              <td>Title</td>
              <td>Price</td>
              <td>Color</td>
              <td>Category</td>
              <td>Cart</td>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.color}</td>
                <td>{item.category}</td>
                <td>
                  <button onClick={() => dispatch(removeToCart(index))}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="price-details">
          <div className="adjust-price">
            <span>Amount</span>
            <span>{amount}</span>
          </div>
          <div className="adjust-price">
            <span>Discount</span>
            <span>{Math.floor(amount / 10)}</span>
          </div>
          <div className="adjust-price">
            <span>Total</span>
            <span>{amount - amount / 10}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
