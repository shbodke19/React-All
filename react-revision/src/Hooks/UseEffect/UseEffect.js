import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [num, setnum] = useState(0);
  const [nums, setnums] = useState(0);

  useEffect(() => {
    alert("I am Clicked");
  }, [num]);

  return (
    <>
      <button
        onClick={() => {
          setnum(num + 1);
        }}
      >
        Click Me {num}
      </button>

      <button
        onClick={() => {
          setnums(nums + 1);
        }}
      >
        Click Me {nums}
      </button>
    </>
  );
};

export default UseEffect;
