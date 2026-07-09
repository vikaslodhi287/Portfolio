import useProfile from "../../hooks/useProfile";

function AboutContent() {
  const { profile } = useProfile();

  return (
    <div className="about-content">

      <span className="about-content__tag">
        About Me
      </span>

      <h2>{profile?.fullName}</h2>

      <h3>{profile?.title}</h3>

      <p>{profile?.bio}</p>

      <div className="about-content__buttons">

        <a
          href={profile?.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn--primary"
        >
          Download Resume
        </a>

        <a
          href="#contact"
          className="btn btn--secondary"
        >
          Contact Me
        </a>

      </div>

    </div>
  );
}

export default AboutContent;