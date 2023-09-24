import React, { useState } from "react";
import Main from "./Main";

import { createContext } from "react";

export const FlowContext = createContext(null);

const App = () => {
  const [cableSelected, setCableSelected] = useState(false);

  const initialFlowContext = {
    cableSelected: cableSelected,
    setCableSelected: setCableSelected,
  };

  return (
    <>
      <FlowContext.Provider value={initialFlowContext}>
        <Main />
      </FlowContext.Provider>
    </>
  );
};

export default App;
