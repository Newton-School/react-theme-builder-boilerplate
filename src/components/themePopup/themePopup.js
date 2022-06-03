import React, { useState } from "react";

export default function ThemePopup({
  settogglePopup
}) {
  

  const nums = [10, 20, 30, 40, 50];


  const onSubmit = () => {
      settogglePopup((pre)=> !pre)
  };

  return (
    <div data-tag="themePopup">
      <div data-tag="color-form">
        <form >
          Theme Name :{" "}
          <input id="themeName" placeholder="theme name" required />
          Background :{" "}
          <input
           
            required
            id="background-input"
            defaultValue="blue"
            placeholder="background color"
            type="text"
          />
          Font Color{" "}
          <input
          
            required
            id="font-color"
            type="text"
          />
          Font Size:{" "}
          <select id="fontSize" >
            <option value={nums[0]}>{nums[0]}</option>
            <option value={nums[1]}>{nums[1]}</option>
            <option value={nums[2]}>{nums[2]}</option>
            <option value={nums[3]}>{nums[3]}</option>
          </select>
          Button Color{" "}
          <input
          
            required
            type="text"
            
            defaultValue="white"
            id="buttonClr"
          
          />
          Button font Color{" "}
          <input
            
            required
                
            defaultValue="black"
            type="text"
            id="button-font-color"
           
          />
          <button id="saveTheme"> Save Theme </button>
        </form>
      </div>
      <div
        data-tag="display-area"
        
      >
        This is test text
        <button >
          Click Me
        </button>
      </div>
    </div>
  );
}
