import MePhoto from "../../../../assets/erpproject-yo.jpg";

import "./index.scss";

function AboutMe() {
  return (
    <div id="about-me" className="columns">
      <div className="column is-6 has-text-right-desktop">
        <figure className="me">
          <img src={MePhoto} alt="Eduardo Rodríguez" />
        </figure>
      </div>
      <div className="column">
        <div className="content">
          <h1 className="title is-size-1">ERP Project</h1>
          <h2 className="subtitle has-text-weight-light is-size-3">
            Proyecto made in Perú 🎸
          </h2>
          <p className="box">
            <span className="has-text-weight-bold">Proyecto</span> que
            interpreta canciones populares como{" "}
            <span className="has-text-weight-bold">
              baladas, rock, anime, videojuegos
            </span>
            , etc, a un{" "}
            <span className="has-text-weight-bold">
              estilo más rock/metal y fusión de otros géneros
            </span>{" "}
            ya sean en inglés, español o instrumentales.
          </p>
          <p className="has-text-weight-light">
            No todo es cover, también hacemos{" "}
            <span className="has-text-weight-bold">composiciones propias</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
