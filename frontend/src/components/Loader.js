import React from "react";

export default function Loader(props) {
  if (props.display) {
    const loader = document.getElementById("loader");
    loader.classList.add("displaynone");
  }

  setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.classList.remove("transformForLoader");
  }, 350);
  return (
    <div className="Loader transformForLoader" id="loader">
      <div className="Loader__Sliders ">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p>Ładujemy twoją imprezę </p>
      </div>
    </div>
  );
}
