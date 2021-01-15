import React from 'react';
import FitText from "react-fittext";
import BlueIcon from "../BlueIcon/BlueIcon";
import "./ServicesOffered.css";
import Responsive from 'react-responsive';
import {Link} from "react-router-dom";

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const ServicesOfferedSpanish = (props) => {
  return (
    <div className="mt-5 mb-5">
      <div className="title">
        <FitText compressor={3.5} minFontSize={25}>
          <h2 className="services-offered-title">Servicios Ofrecidos</h2>
        </FitText>
        <div className="services-subtitle mt-2">Pericia y conocimiento experta</div>
      </div>
      
      <Default>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-3 mb-3">
              <div className="d-flex flex-row justify-content-center">
                <BlueIcon iconClass="fas fa-home fa-2x"/>
                <div className="services-icon-text"><Link className="services-icon-text-link" to="/jailrelease"> Liberación de Cárcel</Link></div>
              </div>
            </div>
  
            <div className="col-md-3 mb-3">
              <div className="d-flex flex-row justify-content-center">
                <BlueIcon iconClass="fas fa-gavel fa-2x"/>
                <div className="services-icon-text">Defensa Criminal</div>
              </div>
            </div>
            
            <div className="col-md-3 mb-3">
              <div className="d-flex flex-row justify-content-center">
                <BlueIcon iconClass="fas fa-user fa-2x"/>
                <div className="services-icon-text">Lesiones Personales</div>
              </div>
            </div>
            
            <div className="col-md-3 mb-3">
              <div className="d-flex flex-row justify-content-center">
                <BlueIcon iconClass="fas fa-user-friends fa-2x"/>
                <div className="services-icon-text">Familia</div>
              </div>
            </div>
          </div>
        </div>
      </Default>
      
      <Mobile>
        <div className="container pl-4">
          <div className="row mt-5">
            <div className="col-md-3 mb-3">
              <div className="d-flex flex-row justify-content-start">
                <BlueIcon iconClass="fas fa-home fa-2x"/>
                <div className="services-icon-text"><Link className="services-icon-text-link" to="/jailrelease"> Liberación de Cárcel</Link></div>
              </div>
            </div>
  
            <div className="col-md-3 mb-3">
              <div className="d-flex flex-row justify-content-start">
                <BlueIcon iconClass="fas fa-gavel fa-2x"/>
                <div className="services-icon-text">Defensa Criminal</div>
              </div>
            </div>
            
            <div className="col-md-3 mb-3">
              <div className="d-flex flex-row justify-content-start">
                <BlueIcon iconClass="fas fa-user fa-2x"/>
                <div className="services-icon-text">Lesiones Personales</div>
              </div>
            </div>
            
            <div className="col-md-3 mb-3">
              <div className="d-flex flex-row justify-content-start">
                <BlueIcon iconClass="fas fa-user-friends fa-2x"/>
                <div className="services-icon-text">Familia</div>
              </div>
            </div>
            
          </div>
        </div>
      </Mobile>
    </div>
  );
};

export default ServicesOfferedSpanish;