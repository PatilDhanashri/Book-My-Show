import React from "react";
import { Route } from "react-router-dom";

// Layout
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <DefaultLayout>
            <Component {...props} />
          </DefaultLayout>
        )}
      />
    </>
  );
};

export default DefaultHOC;

// const  dhanu={
//    name:"dhanu",
//    age:21,
// };
// const student ={ ... dhanu,goodstudent : true};