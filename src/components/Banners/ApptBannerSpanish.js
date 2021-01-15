import React from 'react';
import "./ApptBanner.css";
import { Button } from "reactstrap";
import FitText from "react-fittext";
import { Link } from "react-router-dom";

class ApptBannerSpanish extends React.Component {
  
  render() {
    return (
      <div className="schedule-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <FitText compressor={2.1} minTextSize={25} maxTextSize={34}>
                <h2 className="schedule-text">Llámennos para programar su consulta hoy mismo</h2>
              </FitText>
            </div>
            <div className="col-lg-3">
              <Button tag={Link} to="/contact" outline className="schedule-btn">
                <i className="far fa-calendar-alt"></i> &nbsp; PROGRAMAR AHORA
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApptBannerSpanish;