import React from "react";
import "./TextCombo.css";
import { Context as createContext } from "../contextAPI/createContext";

function TextCombo() {
  const { state, createNew } = React.useContext(createContext);
  const { formData } = state;

  const [box, setBox] = React.useState([]);

  var cardContent = [
    <div className="Container" key={Math.random()}>
      <input
        type="text"
        id={formData.initial}
        onChange={() => createNew(formData.initial)}
      />
      <div>
        <select>
          <option>Hello</option>
          <option>Hai</option>
        </select>
      </div>
    </div>,
  ];

  React.useEffect(() => {
    console.log("UseEffect");
    (formData.create === "YES" || formData.initial === 1) &&
      setBox([...box, cardContent]);
  }, [formData.create]);

  return <div>{box}</div>;
}

export default TextCombo;
