import React from "react";

export default function ThemeCard({
  theme,
  settheme,
  setbtnStyle,
  setfontstyle,
}) 
{


  const {btn_style , base_style , fontstyle}  = theme ; 
  return (
    <div>
      {theme && (
      
        <div style={base_style} data-tag="theme-card">
          <div style={fontstyle}>This is test text </div>
           <button 
            style={btn_style}
            onClick={() => {
              settheme(base_style);
              setbtnStyle(btn_style);
              setfontstyle(fontstyle);
            }}
          >
            {theme.name}
          </button>
        </div>
      )}
    </div>
  );
}
