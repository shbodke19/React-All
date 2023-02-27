import React, { useEffect } from "react";

const useCustom = (count) => {
  useEffect(() => {
    console.log("I am the first One");
    if (count >= 1) {
      document.title = `Chats ${count}`;
    } else {
      document.title = `Chats`;
    }
  }, [count]);
};
export default useCustom;
