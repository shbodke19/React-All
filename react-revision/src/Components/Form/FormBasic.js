import React, { useState } from "react";

export default function FormBasic() {
  const [inputs, setInputs] = useState({});
  const [fullname, setFullname] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullname(inputs);
    setInputs(" ");
    console.log(inputs);
    // alert("Age is : " + inputs.age + " , My user Name is : " + inputs.Name);
  };
  return (
    <>
      <h1>
        Hi My Name is {fullname.Name} and my Age is {fullname.age}
      </h1>
      <p>Your Email Id Is : {fullname.email}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Name"
          placeholder="Enter your Name"
          value={fullname.Name}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="number"
          name="age"
          placeholder="Enter your Age"
          value={fullname.age}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          name="email"
          placeholder="Enter your Email"
          value={fullname.email}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <button type="submit">submit </button>
      </form>
    </>
  );
}
