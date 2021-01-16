import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function Contact() {
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
      const show = document.getElementById("contact");
      show.classList.remove("transform");
    }
  }, [loader]);

  return (
    <div className="container">
      <Loader display={loader} />
      <div className="ContainerSection ">
        <div className="whiteContainer">
          <div className="hectagon"></div>

          <div className="ContactGridContainer  transform" id="contact">
            <div className="contactSection ">
              <h2>Skontaktuj się:</h2>
              <div className="contactSection__mobile">
                <i className="fas fa-mobile-alt mobileIcon"></i> 513-564-720
              </div>
              <div className="contactSection__email">
                <i className="far fa-envelope emailIcon"></i>{" "}
                djmateuszswiatczak@gmail.com
              </div>
            </div>
            <div className="PhotoOfTelephone">
              <img
                src="./img/Contact.jpeg"
                alt="photo of Dj Brand"
                onLoad={() => {
                  Loaded();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
