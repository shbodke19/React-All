import React from "react";
import { useState, useEffect } from "react";

const UpdateCount = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    console.log("Data Component");
  }, [data]);

  useEffect(() => {
    console.log("Count Component");
  }, [count]);
  return (
    <>
      <h1>I have rendered Count : {count} times!</h1>
      <h1>Data : {data}</h1>
      <button onClick={() => setData(data + 1)}>Update Data</button>{" "}
      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </>
  );
};

export default UpdateCount;
