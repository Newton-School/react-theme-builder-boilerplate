import "../styles/App.css";
import React from "react";
import { useState } from "react";
import ThemePopup from "./themePopup/themePopup";
import ThemeCard from "./themeCard";
function App() {
  const [baseStyles, setbaseStyles] = useState();
  const [togglePopup, settogglePopup] = useState(false);
  const [styleList, setstyleList] = useState([]);
  const [btnStyle, setbtnStyle] = useState();
  const [fontStyle, setfontStyle] = useState();
  const popup = () => {
    settogglePopup(true);
  };
  return (
    <div className="App" style={baseStyles}>
      <h1> Create Theme </h1>
      {togglePopup && (
        <ThemePopup
          settogglePopup={settogglePopup}
          setstyleList={setstyleList}
          setbtnStyle={setbtnStyle}
          setfontStyle={setfontStyle}
        ></ThemePopup>
      )}
      <div>
        {" "}
        Cool and fancy fonts are special typefaces you can use in your social
        media posts or gamer profiles on Twitter, Instagram, Twitch, and more{" "}
      </div>
      <button onClick={popup} style={btnStyle} data-tag='create' >
        {" "}
        Start{" "}
      </button>
      <div data-tag="theme-cards">
        {styleList.length > 0 &&
          styleList.map((ele) => (
            <ThemeCard
              theme={ele}
              key={ele.name}
              settheme={setbaseStyles}
              setbtnStyle={setbtnStyle}
              setfontstyle={setfontStyle}
            ></ThemeCard>
          ))}
      </div>
    </div>
  );
}

export default App;
