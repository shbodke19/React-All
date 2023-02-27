import React, { useEffect, useState } from "react";
import useCustom from "./Custom";

const UseEffet = () => {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     console.log("I am the first One");
  //     if (count >= 1) {
  //       document.title = `Chats ${count}`;
  //     } else {
  //       document.title = `Chats`;
  //     }
  //   }, [count]);

  useCustom(count);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Test</button>
    </>
  );
};

export default UseEffet;
