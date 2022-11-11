import React, { Component } from "react";
import "./JailReleasePage.css";
// import TitleBanner from "../Banners/TitleBanner";
import ProfileTitle from "../Banners/ProfileTitle";
import CallBannerSpanish from "../Banners/CallBannerSpanish";

class JailReleasePageSpanish extends Component {
  render() {
    return (
      <div>
        {/*<TitleBanner color="#06b9dd" title="Liberación de Cárcel" />*/}
        <ProfileTitle color="#06b9dd" title="Liberación de Cárcel"/>

        <div className="container">
          <div className="section-content">
            <div>
              <h2 className="md-heading textaligncenter profile-header-text">
              Michaela D. Cuellar
              </h2>
              <div className="profile-header-sub-text">Abogada de Liberación de Cárcel en Austin</div>
              <div className="profile-header-sub-text">Agresivamente luchando por tus derechos!</div>
              <div className="profile-header-sub-text">SIRVIENDO EN LAS CORTES DEL CONDADO DE TRAVIS</div>
              <div className="profile-header-sub-text">Aceptamos todas las tarjetas de crédito principales y dinero en efectivo</div>
              <CallBannerSpanish/>
              <br></br>
              

              <div className="md-team preview-circle">
                <div className="row">
                  <div className="col-md-12 item">
                    <div className="md-member">
                      
                      
                      
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Profile Description */}
              {/*<h3 className="profile-bio-header mt-3">About Me</h3>*/}
              
              <p className="profile-desc2 mb-3">
              ¿Por qué escoger a una abogada sobre un fiador de fianza? No solo es el proceso más conveniente pero más asequible también. Además de liberación de cárcel, la oficina también ofrece representación legal sobre su caso. La meta es hacer el procedimiento lo más fácil posible para usted. Usted solamente nos da la información de quien busca liberar y la oficina se encarga de hacer el trabajo para liberarlos. Un cofirmante no es requerido con nuestra oficina, dejándolos libre de responsabilidad sobre la fianza por si acaso la persona liberada bajo fianza no cumple con los términos o las condiciones de la fianza. Usted solo paga por el servicio de liberación de cárcel.

              </p>
              <p className="profile-desc2 mb-3">
              No requerimos colateral o bienes por la cantidad que resta de la fianza. ¡No espere! Una abogada no tiene que esperar magistratura permitiéndonos la oportunidad de actuar y liberar a sus seres queridos más rápidamente. Un fiador no tiene es lujo. Escogiendo a una abogada de liberación de cárcel no solo puede liberar a sus seres queridos, pero también comenzar la estrategia de su defensa.
              </p>
              <p className="profile-desc2 mb-5">
              Es extremadamente importante retener un abogado o abogada lo más pronto posible para evitar retrasos en su caso. Prometo trabajar con agresividad y astucia efectivamente en la liberación de sus seres queridos lo más pronto posible.

              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JailReleasePageSpanish;