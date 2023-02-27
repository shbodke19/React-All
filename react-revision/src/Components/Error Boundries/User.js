import React, { Component } from "react";

class User extends Component {
  render() {
    if (true) {
      throw new Error("Custom User Error");
    }
    return (
      <div>
        <h1>User Component</h1>
      </div>
    );
  }
}

export default User;

// import React from "react";

// const User = () => {
//   if (true) {
//     throw new Error("Custom User Error");
//   }
//   return (
//     <>
//       <h1>User Component</h1>
//     </>
//   );
// };

// export default User;
