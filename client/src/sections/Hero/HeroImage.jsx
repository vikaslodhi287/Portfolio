import HeroOrbit from "./HeroOrbit";
import HeroBadges from "./HeroBadges";

function HeroImage({ profile }) {
  return (
    <div className="hero-image-wrapper">

      <div className="hero-image-glow"></div>

      <HeroOrbit />

      <div className="hero-image">

        <HeroBadges />

        <img
          src={profile.avatar}
          alt={profile.fullName}
        />

      </div>

    </div>
  );
}

export default HeroImage;