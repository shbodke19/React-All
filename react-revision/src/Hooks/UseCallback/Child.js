import React, { memo } from "react";

const Child = ({ Learning, count }) => {
  console.log("Child Copmonent");
  return (
    <>
      <h1>Child</h1>
    </>
  );
};

export default memo(Child);
