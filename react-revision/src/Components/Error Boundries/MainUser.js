import React, { Component } from "react";
import ErrorBoundry from "./ErrorBoundry";
import User from "./User";

class MainUser extends Component {
  render() {
    return (
      <>
        <h1>Error Boundry in React</h1>
        <ErrorBoundry>
          <User />
        </ErrorBoundry>
      </>
    );
  }
}

export default MainUser;

// const MainUser = () => {
//   return (
//     <>
//       <h1>Error Boundry in React</h1>
//       <ErrorBoundry>
//         <User />
//       </ErrorBoundry>
//     </>
//   );
// };
