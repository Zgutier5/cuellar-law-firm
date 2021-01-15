import React from 'react';
import "./WhyChooseBanner.css";
import FitText from "react-fittext";
import GavelImg from "../../assets/gable1.png";

const WhyChooseBannerSpanish = (props) => {
  return (
    <div className="why-container">
      <div className="section-mask">
        {/* Title */}
        <div className="container">
          <div className="row mt-5">
            <div className="col-12">
              <FitText compression={3.7} minFontSize={25} maxFontSize={35}>
                <h2 className="why-title">¿Por qué escoger a Michaela D. Cuellar?</h2>
              </FitText>
            </div>
          </div>
          
          <div className="row pb-5">
            <div className="col-md-6">
              {/* Quick Response section */}
              <div className="d-flex flex-row justify-content-end mb-4">
                <div className="quick-response option1">
                  Repuesta Rápida
                  <div className="subtext">Llamadas de liberación de cárcel contestadas las 24 horas al día.</div>
                </div>
                <i className="fas fa-mobile-alt fa-2x icon icon-mobile"></i>
              </div>
              
              {/* payment plans sectino */}
              <div className="d-flex flex-row justify-content-end mb-4">
                <div className="quick-response option2">
                  Plan de Pagos
                  <div className="subtext">Plan de instalación de pagos disponibles.</div>
                </div>
                <i className="far fa-money-bill-alt fa-2x icon icon-dollar"></i>
              </div>
  
              {/* payment plans sectino */}
              <div className="d-flex flex-row justify-content-end mb-4">
                <div className="quick-response option3">
                  Bilingüe
                  <div className="subtext">Se habla español.</div>
                </div>
                <i className="fas fa-cog fa-2x icon icon-gear"></i>
              </div>
              
            </div>
            <div className="col-md-6 d-none d-md-inline">
              <img src={GavelImg} className="img-fliud" alt="gavel" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseBannerSpanish;