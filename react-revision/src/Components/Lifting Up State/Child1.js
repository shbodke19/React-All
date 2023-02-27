import React, { useState } from "react";

const Child1 = (props) => {
  const [name, setName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getData(name);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Child1;
