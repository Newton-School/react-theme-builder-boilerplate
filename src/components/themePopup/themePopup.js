import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ThemePopup({
  settogglePopup,
  setstyleList,
  setbtnStyle,
  setfontStyle,
}) {
  const [style, setstyle] = useState();
  const [bgref, setbgref] = useState("blue");
  const [fontref, setfontref] = useState(20);
  const [colorref, setcolorref] = useState("grey");
  const [btnref, setbtnref] = useState("white");
  const [btnFontref, setbtnFontref] = useState("black");

  const nums = [10, 20, 30, 40, 50];

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    var currentdate = new Date();
    var key =
      currentdate.getHours() +
      currentdate.getMinutes() +
      currentdate.getSeconds() +
      currentdate.getMilliseconds();
    const listItem = {
      name: data.name,
      key: key,
      base_style: {
        color: data.color,
        background: data.background,
        fontSize: data.fontSize + "px",
      },
      btn_style: {
        background: data.btnref,
        color : data.btnFontref,
      },
      fontstyle: {
        fontSize: data.fontSize +'px',
      },
    };
    setfontStyle(listItem.fontstyle);
    setstyle(listItem.base_style);
    setbtnStyle(listItem.btn_style);
    setstyleList((pre) => [...pre, listItem]);
    settogglePopup((pre) => !pre);
  };

  return (
    <div data-tag="themePopup">
      <div data-tag="color-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          Theme Name :{" "}
          <input id="themeName" {...register("name")} placeholder="theme name" required />
          Background :{" "}
          <input
            {...register("background")}
            onChange={(e) => setbgref(e.target.value)}
            required
            defaultValue="#ffffff"
            placeholder="background color"
            type="color"
          />
          Font Color{" "}
          <input
            {...register("color")}
            required
            type="color"
            onChange={(e) => setcolorref(e.target.value)}
          />
          Font Size:{" "}
          <select id="fontSize"
            {...register("fontSize")}
            onChange={(e) => setfontref(e.target.value)}
          >
            <option value={nums[0]}>{nums[0]}</option>
            <option value={nums[1]}>{nums[1]}</option>
            <option value={nums[2]}>{nums[2]}</option>
            <option value={nums[3]}>{nums[3]}</option>
          </select>
          Button Color{" "}
          <input
            {...register("btnref")}
            required
            placeholder="color"
            defaultValue="#ffffff"
            id="buttonClr"

            type='color'
            onChange={(e) => setbtnref(e.target.value)}
          />
          Button font Color{" "}
          <input
            {...register("btnFontref")}
            required
            placeholder="color"
            defaultValue="#000000"
            type="color"
            onChange={(e) => setbtnFontref(e.target.value)}
          />
          <button id="saveTheme"> Save Theme </button>
        </form>
      </div>
      <div
        data-tag="display-area"
        style={{ background: bgref, color: colorref, fontSize: fontref + "px" }}
      >
        This is test text
        <button style={{ background: btnref, color: btnFontref }}>
          Click Me
        </button>
      </div>
    </div>
  );
}
