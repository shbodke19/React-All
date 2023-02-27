import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { searchProduct } from "../action/ProductAction";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  // const dispatch = useDispatch();
  console.log("data in header", result);
  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">Shopping Cart</h1>
      </Link>

      <img
        src="https://e7.pngegg.com/pngimages/1020/137/png-clipart-bag-illustration-logo-shopping-logo-design-purple-other.png"
        alt=""
        className="logo-logo"
      />
      {/* <div className="search-box">
        <input
          type="text"
          onChange={(e) => dispatch(searchProduct(e.target.value))}
          placeholder="Search Product"
        />
      </div> */}
      <Link to="/cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt="Img"
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
