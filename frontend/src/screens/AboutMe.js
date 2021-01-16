import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function AboutMe() {
  let lengthLoading = false;
  setTimeout(() => {
    lengthLoading = true;
  }, 550);
  setTimeout(() => {
    lengthLoading = false;
  }, 1500);
  const [loader, setLoader] = useState(false);
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
      const show = document.getElementById("aboutme");
      show.classList.remove("transform");
    }
  }, [loader]);

  return (
    <div className="container">
      <Loader display={loader} />
      <div className="ContainerSection transform" id="aboutme">
        <div className="AboutMeGridContainer">
          <div className="AboutMe-Photo">
            <img
              src="./img/MeToAboutMe.JPG"
              alt="photo of Dj Brand"
              onLoad={() => Loaded()}
            />
          </div>
          <div className="AboutMe-Text">
            <h2 className="AboutMe-Text__Header">
              <span className="AboutMe-Text__Header__fontStyleName">
                Po prostu Mateusz
              </span>{" "}
              <br />
              <span className="AboutMe-Text__Header__fontStyle">
                albo DJ Brand
              </span>
            </h2>

            <p>
              Z pewnością nie Pan, już przy pierwszym kontakcie chciałbym z wami
              nawiązać kontakt szczery i otwarty, w końcu rozmawiamy o waszym
              wielkim dniu ! A więc mówmy sobie po imieniu, mam nadzięję że dla
              was to w porządku.
            </p>
            <p>
              Muzyka,zabawa i imprezy są moją pasją odkąd pamiętam, zgromadziłem
              wokół siebie masę ludzi kochających to co robią i nawet nie wiem
              kiedy to się stało, ale prowadzę już imprezy od kilku lat.
            </p>
            <p>
              Działam uwzględniając każde okoliczności. Kluczem do sukcesu jest
              nieszablonowe podejście do każdego spotkania które prowadzę.
              Sprawię, że twoja impreza będzie niezapomniana, a zabawę ze mną
              będziesz chciał powtórzyć. Jeżeli jeszcze mnie nie poznałeś/aś
              umówmy się na spotkanie, a wtedy rozwieję Twoje wątpliwości.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
