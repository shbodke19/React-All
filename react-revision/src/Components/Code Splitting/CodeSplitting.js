import React, { Suspense } from "react";
// import About from "./About";
// import { add } from "./Math";
// console.log(add(10, 20));
// import("./Math").then((result) => {
//   console.log("Result", result.add(20, 30));
// });

const About = React.lazy(() => import("./About"));
const CodeSplitting = () => {
  return (
    <>
      <h1>Code Splitting Example</h1>
      <Suspense fallback={<div>Wait</div>}>
        <About></About>
      </Suspense>
    </>
  );
};

export default CodeSplitting;
