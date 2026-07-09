import HeroImage from "./HeroImage";

function HeroRight({ profile }) {
  return (
    <div className="hero__right">
      <HeroImage profile={profile} />
    </div>
  );
}

export default HeroRight;