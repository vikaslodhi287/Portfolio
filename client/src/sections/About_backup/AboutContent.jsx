import useProfile from "../../hooks/useProfile";
import {
  Globe,
  Link,
  Send,
} from "lucide-react";

function AboutContent() {
  const { profile } = useProfile();

  return (
    <div className="about-content">
      <span className="section-tag">About Me</span>

      <h2>{profile?.fullName}</h2>

      <h3>{profile?.title}</h3>

      <p>{profile?.bio}</p>

      <div className="about-content__socials">
        {profile?.socialLinks?.github && (
          <a
            href={profile.socialLinks.github}
            target="_blank"
            rel="noreferrer"
          >
            <Globe size={22} />
          </a>
        )}

        {profile?.socialLinks?.linkedin && (
          <a
            href={profile.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Link size={22} />
          </a>
        )}

        {profile?.socialLinks?.twitter && (
          <a
            href={profile.socialLinks.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <Send size={22} />
          </a>
        )}
      </div>
    </div>
  );
}

export default AboutContent;