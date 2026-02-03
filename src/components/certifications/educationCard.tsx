// components/Certifications/EducationCard.tsx
import type { Education } from "@/lib/mockData/certificationsData";

type PropsType = {
  education: Education;
  index: number;
};

const EducationCard = ({ education, index }: PropsType) => {
  return (
    <div
      className="education-card wow fadeInUp"
      data-wow-delay={`${0.3 + index * 0.1}s`}
    >
      <div className="edu-icon">
        <i className={education.icon} />
      </div>
      <div className="edu-content">
        <h4 className="edu-degree">{education.degree}</h4>
        <p className="edu-institution">{education.institution}</p>
        {education.year && <span className="edu-year">{education.year}</span>}
      </div>
    </div>
  );
};

export default EducationCard;
