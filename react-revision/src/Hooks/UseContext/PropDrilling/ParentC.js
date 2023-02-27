import React from "react";
import CompA from "./CompA";

const ParentC = () => {
  const name = "Shri Bodke";
  return (
    <>
      <CompA name={name} />
    </>
  );
};

export default ParentC;
