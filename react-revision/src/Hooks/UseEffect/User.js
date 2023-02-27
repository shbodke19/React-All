import React from "react";
import { useState } from "react";
import PropsUser from "./PropsUser";

const User = () => {
  const [count, setCount] = useState(100);
  const [data, setData] = useState(10);

  return (
    <>
      <PropsUser count={count} data={data} />
      <button onClick={() => setData(data + 1)}>Update Data</button>{" "}
      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </>
  );
};

export default User;
