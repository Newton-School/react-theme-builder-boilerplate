import "../styles/App.css";
import React from "react";
import { useState } from "react";
import ThemePopup from "./themePopup/themePopup";
import ThemeCard from "./themeCard";
function App() {
  const [togglePopup, settogglePopup] = useState(false);
 
  const popup = () => {
    settogglePopup(true);
  };
  return (
    <div className="App" >
      <h1> Create Theme </h1>
      {togglePopup && (
        <ThemePopup
          settogglePopup={settogglePopup}
        ></ThemePopup>
      )}
      <div>
        {" "}
        Cool and fancy fonts are special typefaces you can use in your social
        media posts or gamer profiles on Twitter, Instagram, Twitch, and more{" "}
      </div>
      <button onClick={popup}  data-tag='create' >
        {" "}
        Start{" "}
      </button>
      <div data-tag="theme-cards">
       
            <ThemeCard
             
            ></ThemeCard>
         
      </div>
    </div>
  );
}

export default App;
