import React, { lazy, Suspense } from "react";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

const Lazy = () => {
  return (
    <>
      <h1>Lazy Loading</h1>

      <Suspense fallback={<p>Please wait ... home component is loading</p>}>
        <Home />
      </Suspense>
      <Suspense fallback={<p>Please wait ... about component is loading</p>}>
        <About />
      </Suspense>
    </>
  );
};

export default Lazy;

// import React, { Component, lazy, Suspense } from "react";
// // import Home from "./Home";

// const Home = lazy(() => import("./Home"));
// const About = lazy(() => import("./About"));

// export default class Lazy extends Component {
//   render() {
//     return (
//       <>
//         <h1>Lazy Loading</h1>

//         <Suspense fallback={<p>Please wait ... home component is loading</p>}>
//           <Home />
//         </Suspense>
//         <Suspense fallback={<p>Please wait ... about component is loading</p>}>
//           <About />
//         </Suspense>
//       </>
//     );
//   }
// }

// export default Lazy;
//
