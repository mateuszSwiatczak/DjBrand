import { HashRouter, Link, Route } from "react-router-dom";
import {
  faCompactDisc,
  faUser,
  faMicrophoneAlt,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Main from "./screens/Main.js";
import AboutMe from "./screens/AboutMe.js";
import Contact from "./screens/Contakt.js";
import Offert from "./screens/Offer.js";

import { useState } from "react";

function App() {
  /* setTimeout(() => {
    const show = document.getElementById("contact");
    show.classList.remove("transform");
  }, 100); */
  const [loader, setLoader] = useState(false);
  setTimeout(() => {
    setLoader(true);
  }, 20000);
  let menuOpen = false;
  const HamburgerMenu = () => {
    const menuBtn = document.getElementById("menu-btn");
    const headerNav = document.getElementById("header__nav");
    if (!menuOpen) {
      menuBtn.classList.add("menu-btn__open");
      headerNav.classList.add("header__nav__open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("menu-btn__open");
      headerNav.classList.remove("header__nav__open");
      menuOpen = false;
    }
  };
  console.log(
    "Dzień dobry, Miło mi że tutaj trafiłeś/aś (szczególnie tutaj). Liczę że moja strona Ci się spodoba i mam nadzieję do zobaczenia :) "
  );
  return (
    <HashRouter>
      <div className="App">
        <div className="header">
          <div className="header__logo">
            <Link to="/" className=" tap-color">
              <img src="./img/DJBrandMenu.png" alt="logo DJ Brand" />
            </Link>
          </div>
          <div
            className="menu-btn"
            id="menu-btn"
            onClick={() => HamburgerMenu()}
          >
            <div className="menu-btn__hamburger"></div>
          </div>
          <div className="header__nav" id="header__nav">
            <Link
              className="header__nav__box tap-color"
              to="/"
              onClick={() => HamburgerMenu()}
            >
              <div className="header__nav__box__text">
                Start
                <FontAwesomeIcon icon={faCompactDisc} className="icon" />
              </div>
            </Link>
            <Link
              className="header__nav__box tap-color"
              to="/o_mnie"
              onClick={() => HamburgerMenu()}
            >
              <div className="header__nav__box__text">
                O mnie
                <FontAwesomeIcon icon={faUser} className="icon" />
              </div>
            </Link>
            <Link
              className="header__nav__box tap-color"
              to="/oferta"
              onClick={() => HamburgerMenu()}
            >
              <div className="header__nav__box__text">
                Oferta
                <FontAwesomeIcon icon={faMicrophoneAlt} className="icon" />
              </div>
            </Link>
            <Link
              className="header__nav__box tap-color"
              to="/kontakt"
              onClick={() => HamburgerMenu()}
            >
              <div className="header__nav__box__text">
                Kontakt
                <FontAwesomeIcon icon={faCommentDots} className="icon" />
              </div>
            </Link>
          </div>
        </div>
        <main>
          <Route path="/" component={Main} exact />
          <Route path="/o_mnie" component={AboutMe} exact />
          <Route path="/oferta" component={Offert} exact />
          <Route path="/kontakt" component={Contact} exact />
        </main>
        <div className="footer">
          <div className="footer__Logo">
            <img src="./img/only_dj.png" alt="logo DJ " />{" "}
          </div>
          <div className="footer__textAboutDjBrand">
            Dj Brand - Profesjonalny Dj, konferansjer, wodzirej na wesele,
            studniówkę, imprezy firmowe na Śląsku i okolicach.
          </div>
          <div className="footer__socials">
            Złap mnie na :
            <div>
              <a href="https://www.facebook.com/DJBrand.Mateusz.Swiatczak">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/saint_experience/">
                <i className="fab fa-instagram-square"></i>
              </a>
            </div>
          </div>
          <div className="footer__contactText">
            <div>
              <div className="footer__contactText__text">
                <i className="fas fa-mobile-alt"></i> 513-564-720
              </div>
              <div className="footer__contactText__text">
                <i className="far fa-envelope"></i> djmateuszswiatczak@gmail.com
              </div>
            </div>
          </div>
          <Link className="footer__kontaktLink" to="/kontakt">
            <div className="footer__kontaktLinkDirect">Kontakt</div>
          </Link>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
