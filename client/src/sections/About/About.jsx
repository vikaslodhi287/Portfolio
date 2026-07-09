import "./about.scss";

import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";

function About() {
  return (
    <section className="about" id="about">
      <div className="container about__container">
        <AboutLeft />
        <AboutRight />
      </div>
    </section>
  );
}

export default About;