// import React, { Component } from "react";

// class CComp extends Component {
//   render() {
//     return <h1>Hii Hello From Class Component</h1>;
//   }
// }
// export default CComp;

// import React, { Component } from "react";

// export default class CComp extends Component {
//   constructor(props) {
//     super(props);
//     // this.state = { color: "red" };
//   }
//   render() {
//     return (
//       <div>
//         <h1>This is Class Component with props</h1>
//         {/* <p>Color is {this.state.color}</p> */}
//         <p>Color is {this.props.color}</p>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";

export default class CComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }
  changeColor = () => {
    this.setState({ color: "blue" });
  };
  render() {
    return (
      <div>
        <p>
          This is a {this.props.clas} {this.props.color}
        </p>{" "}
        {/*  //// ///props pass in class component*/}
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}.{" "}
        </p>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}
