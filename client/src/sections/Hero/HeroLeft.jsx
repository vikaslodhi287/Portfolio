import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

function HeroLeft({ profile }) {
  return (
    <div className="hero__left">

      <span className="hero__badge">
        🚀 Available for Opportunities
      </span>

    <h1>
    Hi, I'm{" "}
    <span className="text-gradient">
        {profile.fullName}
    </span>
    </h1>

    <h2 className="hero__title">
    {profile.title}
    </h2>

<p>{profile.bio}</p>

      <HeroButtons profile={profile} />

      <HeroStats />

    </div>
  );
}

export default HeroLeft;