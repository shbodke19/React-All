import React, { useEffect } from "react";
import "./sTyle.css";
import { useDispatch } from "react-redux";
import { addToCart, resetCart } from "../action/Action";
import { productLists } from "../action/ProductAction";
import { useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(productLists());
  }, []);
  return (
    <>
      <button className="btn-1" onClick={() => dispatch(resetCart())}>
        Empty Cart
      </button>
      <div className="product-container">
        {data.map((item) => (
          <div className="product-item" key={item.id}>
            <img src={item.image} alt="img" style={{ padding: "20px" }} />
            <div>Name : {item.title}</div>
            <div>Price : {item.price}</div>
            <div>Color : {item.color}</div>
            <div>Category : {item.category}</div>
            <button onClick={() => dispatch(addToCart(item))}>
              Add To Cart
            </button>{" "}
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
