// components/Experience/ExperienceCard.tsx
import type { Experience } from "@/lib/mockData/experiencesData";
import AnimateHeight from "react-animate-height";

type PropsType = {
  experience: Experience;
  index: number;
  activeId: number | null;
  toggleItem: (id: number) => void;
};

const ExperienceCard = ({
  experience,
  index,
  activeId,
  toggleItem,
}: PropsType) => {
  const isActive = activeId === experience.id;
  const currentRole = experience.roles[0];

  return (
    <div
      className={`experience-item ${isActive ? "is-active" : ""} wow fadeInUp`}
      data-wow-delay={`${0.5 + index * 0.1}s`}
      onClick={() => toggleItem(experience.id)}
    >
      <div className="experience-header">
        <div className="experience-main">
          <h4 className="company-name">{experience.company}</h4>
          <p className="role-title">{currentRole.title}</p>
          <div className="experience-meta">
            <span className="period">{currentRole.period}</span>
            <span className="separator">•</span>
            <span className="duration">{currentRole.duration}</span>
          </div>
          <p className="location">
            <i className="bi bi-geo-alt" /> {experience.location}
          </p>
        </div>
        <div className="expand-icon">
          <i className={`bi bi-chevron-${isActive ? "up" : "down"}`} />
        </div>
      </div>

      <AnimateHeight duration={300} height={isActive ? "auto" : 0}>
        <div className="experience-details">
          {experience.description && (
            <p className="experience-description">{experience.description}</p>
          )}

          {experience.roles.length > 1 && (
            <div className="previous-roles">
              <h5>Previous Roles at {experience.company}</h5>
              {experience.roles.slice(1).map((role, i) => (
                <div key={i} className="previous-role">
                  <p className="role-title">{role.title}</p>
                  <div className="experience-meta">
                    <span className="period">{role.period}</span>
                    <span className="separator">•</span>
                    <span className="duration">{role.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </AnimateHeight>
    </div>
  );
};

export default ExperienceCard;
