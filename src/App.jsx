import {  useState } from "react";

import "./styles.scss";
import Gallery from "./components/Gallery";

const App = () => {
  const [isRTL, setIsRTL] = useState(false);
  const toggleDirection = (direction) => {
    if (direction === "rtl") {
      document.documentElement.dir = "rtl";
      document.body.classList.add("rtl");
      setIsRTL(true);
    } else {
      document.documentElement.dir = "ltr";
      document.body.classList.remove("rtl");
      setIsRTL(false);
    }
  };

  return (
    <div className="App">
      <header className="my-header">
        <h1>Responsive Image Gallery</h1>
        <div className="direction-buttons">
          <button
            onClick={() => toggleDirection(isRTL ? "ltr" : "rtl")}
            className="switch"
          >
            {isRTL ? "Switch to LTR" : "Switch to RTL"}
          </button>
        </div>
      </header>
      <Gallery />
    </div>
  );
};

export default App;
