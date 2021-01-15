import React from 'react';
import "./HomePage.css";
// import FitText from "react-fittext";

//SPANISH
// import BlueIcon from "../BlueIcon/BlueIcon";

import Responsive from 'react-responsive';

import MichaelaBannerSpanish from '../Banners/MichaelaBannerSpanish';
import MichaelaBannerMobileSpanish from '../Banners/MichaelaBannerMobileSpanish';
import ServicesOfferedSpanish from '../Banners/ServicesOfferedSpanish';
import WhyChooseBannerSpanish from '../Banners/WhyChooseBannerSpanish';
import ApptBannerSpanish from '../Banners/ApptBannerSpanish';

import JailReleasePageSpanish from '../JailReleasePage/JailReleasePageSpanish';


const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class HomePage3 extends React.Component {
  render() {
    return (
      <div>
        {/* banner image of Michaela */}
        <Default>
          <MichaelaBannerSpanish />
        </Default>
        <Mobile>
          <MichaelaBannerMobileSpanish />
        </Mobile>
        {/*<JusticeBanner />*/}
        {/* Services Offerred Section */}
        <ServicesOfferedSpanish />
        <WhyChooseBannerSpanish />
        <ApptBannerSpanish />
        <JailReleasePageSpanish />
      </div>
    );
  }
}

export default HomePage3;