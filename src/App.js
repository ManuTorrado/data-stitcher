import React from "react";
import Main from "./Main";

import { createContext, useContext } from "react";
const FlowContext = createContext();

const App = () => {
  return (
    <>
      <Main />
    </>
  );
};

export default App;
