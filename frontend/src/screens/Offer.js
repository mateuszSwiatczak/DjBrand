import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function Offert() {
  const [loader, setLoader] = useState(false);
  const textBox = document.getElementById("textOfOffer");
  const show = document.getElementById("aboutme");
  const gridResponsive = document.getElementById("gridOffer");
  const textBoxBorder = document.getElementById("borderOfOffer");
  const buttonMenu = document.getElementById("backToOfferMenu");
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
  let activeBox = 0;
  useEffect(() => {
    if (loader) {
      show.classList.remove("transform");
      textBoxBorder.classList.remove("borderx0");
      setTimeout(() => {
        textBoxBorder.classList.remove("transition2s");
      }, 2200);
    }
  }, [loader]);

  const move = (x = activeBox) => {
    if (activeBox) {
      textBox.classList.remove("activeText" + activeBox);
    }

    textBox.classList.add("activeText" + x);
    gridResponsive.classList.add("gridResponsive");
    if (activeBox !== x) {
      textBoxBorder.classList.add("borderx0");

      setTimeout(() => {
        textBoxBorder.classList.remove("borderx0");
      }, 2500);
    }
    buttonMenu.classList.add("displayButton");
    activeBox = x;
  };
  const back = x => {
    textBox.classList.remove("activeText" + activeBox);
    buttonMenu.classList.remove("displayButton");
  };

  return (
    <div className="container">
      <Loader display={loader} />
      <div className="ContainerSection transform" id="aboutme">
        <div className="gridOffer">
          <div className="offerText" id="textOfOffer">
            <div
              className="offerText__Contenerborder borderx0 transition2s"
              id="borderOfOffer"
            ></div>
            <div className="offerText__start ">
              <h1>Wybierz ofertę dla siebie</h1>
            </div>
            <div className="offerText__wesele ">
              <h1>Wesele</h1>
              <div className="offerText__paragraf">
                <p>
                  <strong>Drodzy Nowożeńcy </strong>
                </p>
                <p>
                  Dołożę wszelkich starań, aby wasz najważniejszy dzień w życiu
                  był niezwykły i niezapomniany. Zadowolenie wasze i gości jest
                  moim największym honorarium.
                </p>
                <p>
                  Ze mną nauczycie się ciekawych układów tanecznych, oraz
                  poznacie nieszablonowe konkursy- jednym słowem będzie się
                  działo!
                </p>
                <p>
                  Kładę wysoki nacisk na detale wizualne i dźwiękowe. Muzyka
                  którą prezentuje zadowola starsze jak i młodsze pokolenie
                </p>
                <p>Wesele hej ! </p>
              </div>
            </div>
            <div className="offerText__business " id="textOfOffer2">
              <h1>Firmówka</h1>
              <div className="offerText__paragraf">
                <p>
                  Na imprezach firmowych kładę szczególny nacisk na integrację,
                  w taki sposób aby cały personel się poznał i poczuł swobodnie.
                </p>
                <p>
                  Repertuar muzyczny dobieram do towarzystwa - tak,aby każdy był
                  zadowolony i się nie nudził. W końcu szczególnie w pracy
                  ludzie spotykają się z różnorodnymi gustami.
                </p>
                <p></p>
                <p>
                  "Coś jest nie tak z moim wzrokiem. Jakoś nie widzę siebie w
                  pracy"
                  <br />
                  <span className="toRight">- Teddy Bergerson</span>
                </p>
              </div>
            </div>
            <div className="offerText__100dniowka " id="textOfOffer3">
              <h1>Studniówka</h1>
              <div className="offerText__paragraf">
                <p>
                  Studniówka, wspaniały czas, pełny bezstroski, imprez, zabawy.
                  Doskonale pamiętam własną.
                </p>
                <p>
                  Ponieważ jestem osobą młodą doskonale rozumiem potrzeby
                  młodzieży, sprawię, że twoja studniówka będzie niezapomniana i
                  pełna wrażeń.
                </p>
                <p>
                  Bal studniówkowy musi być elegancki, pełen klasy i dobrego
                  stylu. Dołożę wszelkich starań aby był on taki dla was,
                  nauczycieli jak i rodziców.
                </p>
                <p>
                  Mój sprzęt pozwala oświetlić, oraz nagłośnić wielkie sale.
                  Sprawi on że doskonale poczujecie klimat.
                </p>
                <p>"Hurra, Hurra, dzisiaj matura" ;)</p>
              </div>
            </div>
            <div className="offerText__inneImprezy " id="textOfOffer4">
              <h1>Inne</h1>
              <div className="offerText__paragraf">
                <p>
                  Jeżeli potrzebujesz DJ'a bądź konferansjera dla twojej imprezy
                  - zadzwoń i przekonaj się, że jestem odpowiednią osobą.
                </p>
                <p>
                  Imprezy które mogę poprowadzić to między innymi: urodziny,
                  bale karnawałowe, imprezy klubowe, imprezy tematyczne.
                </p>
                <p>
                  W zależności od potrzeb potrafię przeprowadzić wydarzenia z
                  udziałem publiczności, za granicą, kilkudniowych, na scenie
                  estradowej.
                </p>
                <p>Zatem do usłyszenia</p>
              </div>
            </div>
          </div>
          <div className="offerPhotos" id="gridOffer">
            <figure className="offerPhotos__wesele hue" onClick={() => move(1)}>
              <img
                src="./img/wedding.jpeg"
                alt="wedding"
                onLoad={() => Loaded()}
              />
              <figcaption>Wesele</figcaption>
            </figure>
            <figure
              className="offerPhotos__business hue"
              onClick={() => move(2)}
            >
              <img src="./img/Business.jpeg" alt="business party" />
              <figcaption>Impreza firmowa</figcaption>
            </figure>

            <figure
              className="offerPhotos__100dniowka hue"
              onClick={() => move(3)}
            >
              <img src="./img/100.jpeg" alt="People on party " className="" />
              <figcaption className="figcaption">Studniówka</figcaption>
            </figure>
            <figure
              className="offerPhotos__inneImprezy hue"
              onClick={() => move(4)}
            >
              <img src="./img/other.jpeg" alt="słuchawki" />
              <figcaption>Inne</figcaption>
            </figure>
          </div>
          <button
            className="backToOfferMenu"
            id="backToOfferMenu"
            onClick={() => back(activeBox)}
          >
            <i className="fas fa-undo"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
