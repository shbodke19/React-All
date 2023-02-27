import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const age = searchParams.get("age");
  const city = searchParams.get("city");
  const name = searchParams.get("name");
  return (
    <>
      <h1>Filter Page</h1>
      <h3>Age : {age}</h3>
      <h3>city : {city}</h3>
      <h3>Name : {name}</h3>
    </>
  );
};

export default Filter;
