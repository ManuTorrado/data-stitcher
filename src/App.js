import React from "react";
import Main from "./Main";

import { createContext, useContext } from "react";
const FlowContext = createContext(null);

const App = () => {
  return (
    <>
      <FlowContext.Provider value={""}>
        <Main />
      </FlowContext.Provider>
    </>
  );
};

export default App;
