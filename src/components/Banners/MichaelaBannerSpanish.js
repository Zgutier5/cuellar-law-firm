import React from 'react';
import "./MichaelaBanner.css";
import MichaelaImg from "../../assets/MikaelaCuellar.jpg";
import FitText from "react-fittext";

// did the styles this way so i could import the image and use it as the background-image property
const styles = {
  imgBanner: {
    backgroundImage: `url(${MichaelaImg})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "scroll",
    width: "100%",
    height: 600,
  }
};

const MichaelaBannerSpanish = (props) => {
  return (
    <div>
      {/* banner image of Michaela */}
      <div className="michaela-img" style={styles.imgBanner}>
        <div className="container">
          <FitText compressor={1} minFontSize={20} maxFontSize={34}>
            <h2 className="img-top-text">Se Habla Español</h2>
          </FitText>
          <FitText compressor={1.5} minFontSize={20} maxFontSize={34}>
            <h2 className="img-middle-text">Contestamos llamadas las 24 horas al día</h2>
          </FitText>
          <FitText compressor={1.5} minFontSize={20} maxFontSize={34}>
            <h2 className="img-bottom-text">Comuníquense con nuestra oficina al (512) 765-6341</h2>
          </FitText>
        </div>
      </div>
    </div>
  );
};

export default MichaelaBannerSpanish;