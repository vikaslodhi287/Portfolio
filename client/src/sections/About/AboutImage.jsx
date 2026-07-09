import useProfile from "../../hooks/useProfile";

function AboutImage() {
  const { profile } = useProfile();

  return (
    <div className="about-image">
      <div className="about-image__glow"></div>

      <img
        src={profile?.avatar}
        alt={profile?.fullName || "Profile"}
      />

      <div className="experience-card">
        <h3>2+</h3>
        <span>Years Experience</span>
      </div>
    </div>
  );
}

export default AboutImage;