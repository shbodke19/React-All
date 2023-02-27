import React, { forwardRef } from "react";

const User = (props, reff) => {
  return (
    <>
      <input type="text" ref={reff} />
    </>
  );
};

export default forwardRef(User);
