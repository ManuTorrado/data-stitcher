import React from "react";
import Main from "./Main";

import { createContext, useContext } from "react";
const FlowContext = createContext();

const App = () => {
  return (
    <>
      <FlowContext.Provider>
        <Main />
      </FlowContext.Provider>
    </>
  );
};

export default App;
