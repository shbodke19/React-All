// import React, { Component, useState } from "react";

// class TWDB extends Component {
//   state = {
//     name: "Shree Bodke",
//   };

//   handleChange = (e) => {
//     this.setState({
//       name: e.target.value,
//     });
//   };
//   render() {
//     return (
//       <>
//         <h1>Two Way Data Binding</h1>
//         <h2>{this.state.name}</h2>
//         <input
//           type="text"
//           onChange={this.handleChange}
//           value={this.state.name}
//         />
//       </>
//     );
//   }
// }

// export default TWDB;

import React, { useState } from "react";

const TWDB = () => {
  const [state, setState] = useState("Hii");

  const handle = (e) => {
    setState(e.target.value);
  };

  return (
    <>
      <h1>{state}</h1>
      <input type="text" onChange={handle} value={state} />
    </>
  );
};

export default TWDB;
