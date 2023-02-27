import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "./catSlice";

const Main = () => {
  const catsss = useSelector((state) => state.cats.catss);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);
  console.log(catsss);

  return (
    <div className="App">
      <h1>Cats Gallery</h1>
      <p>Images are different species of cats.</p>
      <hr />
      <div className="Gallery">
        {catsss.map((cat) => (
          <div key={cat.id} className="row">
            <div className="column column-left">
              <img alt="" src={cat.image} width="200" height="200" />
            </div>
            <div className="column column-right">
              <h2>{cat.title}</h2>
              <h5>Temperament : {cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
