import { useProfileContext } from "../../../contexts/ProfileContext";

function HeroButtons() {
  const { profile, loading } = useProfileContext();

  if (loading || !profile) {
    return null;
  }

  return (
    <div>
      <button>
        {profile.cta?.hireMeText || "Hire Me"}
      </button>

      <button>
        {profile.cta?.resumeText || "Download Resume"}
      </button>
    </div>
  );
}

export default HeroButtons;