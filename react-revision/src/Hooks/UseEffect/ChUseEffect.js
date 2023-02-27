import React, { useEffect, useState } from "react";

const ChUseEffect = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    // alert("I am Clicked");
    document.title = `You Clicked me ${count} times`;
  }, [count]);
  return (
    <>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Click Me {count}
      </button>
    </>
  );
};

export default ChUseEffect;
