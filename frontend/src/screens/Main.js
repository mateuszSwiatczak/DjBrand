import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function Main(props) {
  let counter = 1;
  const [loader, setLoader] = useState(false);
  let lengthLoading = false;
  setTimeout(() => {
    lengthLoading = true;
  }, 550);
  setTimeout(() => {
    lengthLoading = false;
  }, 1500);
  const Loaded = () => {
    if (!lengthLoading) {
      !loader && setLoader(true);
    } else {
      setTimeout(() => {
        !loader && setLoader(true);
      }, 2500);
    }
  };

  useEffect(() => {
    if (loader) {
      const show = document.getElementById("sliderContainer");
      show.classList.remove("transform");
    }
  }, [loader]);
  useEffect(() => {
    if (loader) {
      const interval = setInterval(() => {
        if (document.getElementById("radio" + counter)) {
          document.getElementById("radio" + counter).checked = true;

          counter++;
          if (counter > 3) {
            counter = 1;
          }
        } else {
          clearInterval(interval);
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [loader]);

  const setCounter = x => {
    counter = x;
  };

  return (
    <div className="container">
      <Loader display={loader} />

      <div className="transform" id="sliderContainer">
        <div className=" slider">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />

            <div className="first">
              <div className="slide__Logo">
                <img src="./img/MainDJBrand.png" alt="DjBrandLogo" />
              </div>
            </div>
            <div className="slide second">
              <img src="./img/ja.jpg" alt="DJBrand" onLoad={() => Loaded()} />
            </div>
            <div className="slide third">
              <img src="./img/1.jpg" alt="wed" />
            </div>
          </div>
          <div className="navigation-auto">
            <div className="auto-btn1" id="active1"></div>
            <div className="auto-btn2" id="active2"></div>
            <div className="auto-btn3" id="active3"></div>
          </div>

          <div className="navigation-manual">
            <label
              htmlFor="radio1"
              className="manual-btn"
              onClick={() => setCounter(1)}
            ></label>
            <label
              htmlFor="radio2"
              className="manual-btn"
              onClick={() => setCounter(2)}
            ></label>
            <label
              htmlFor="radio3"
              className="manual-btn"
              onClick={() => setCounter(3)}
            ></label>
          </div>
        </div>
      </div>
    </div>
  );
}
