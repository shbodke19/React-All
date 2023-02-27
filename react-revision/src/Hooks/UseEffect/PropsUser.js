import React, { useEffect } from "react";

const PropsUser = (props) => {
  useEffect(() => {
    console.log(" Component");
    // alert("Count is : " + props.count);
  }, [props.count]);
  return (
    <>
      <h1>Count Props : {props.count}</h1>
      <h1>Data Props : {props.data}</h1>
    </>
  );
};

export default PropsUser;
