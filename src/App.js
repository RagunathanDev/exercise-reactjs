import "./App.css";
import TextCombo from "./component/TextCombo";
import { Provider } from "./contextAPI/createContext";
import React from "react";

function App() {
  return (
    <Provider>
      <div className="App">
        <TextCombo />
      </div>
    </Provider>
  );
}

export default App;
