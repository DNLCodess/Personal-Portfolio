// components/Certifications/CertificationCard.tsx
import type { Certification } from "@/lib/mockData/certificationsData";

type PropsType = {
  certification: Certification;
  index: number;
};

const CertificationCard = ({ certification, index }: PropsType) => {
  return (
    <div
      className="certification-card wow fadeInUp"
      data-wow-delay={`${0.3 + index * 0.1}s`}
    >
      <div className="cert-icon">
        <i className={certification.icon} />
      </div>
      <div className="cert-content">
        <h5 className="cert-title">{certification.title}</h5>
        <p className="cert-issuer">{certification.issuer}</p>
      </div>
      <div className="cert-badge">
        <i className="bi bi-patch-check-fill" />
      </div>
    </div>
  );
};

export default CertificationCard;
