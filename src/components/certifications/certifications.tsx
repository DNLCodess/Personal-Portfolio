// components/Certifications/Certifications.tsx
"use client";
import {
  certificationsData,
  educationData,
} from "@/lib/mockData/certificationsData";
import { useState } from "react";
import CertificationCard from "./certificationCard";
import EducationCard from "./educationCard";

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredCertifications =
    activeFilter === "all"
      ? certificationsData
      : certificationsData.filter((cert) => cert.category === activeFilter);

  const filters = [
    {
      id: "all",
      label: "All Certifications",
      count: certificationsData.length,
    },
    {
      id: "marketing",
      label: "Marketing",
      count: certificationsData.filter((c) => c.category === "marketing")
        .length,
    },
    {
      id: "analytics",
      label: "Analytics & SEO",
      count: certificationsData.filter((c) => c.category === "analytics")
        .length,
    },
    {
      id: "design",
      label: "Design",
      count: certificationsData.filter((c) => c.category === "design").length,
    },
  ];

  return (
    <section id="certifications" className="certifications section-pt">
      <div className="container">
        <div className="section-title wow fadeInUp" data-wow-delay=".3s">
          <h3>Certifications & Education</h3>
          <span />
        </div>

        {/* Education Section */}
        <div className="education-section wow fadeInUp" data-wow-delay=".4s">
          <h4 className="subsection-title">Academic Background</h4>
          <div className="education-grid">
            {educationData.map((edu, index) => (
              <EducationCard key={edu.id} education={edu} index={index} />
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="certifications-section">
          <h4 className="subsection-title wow fadeInUp" data-wow-delay=".5s">
            Professional Certifications
          </h4>

          {/* Filter Buttons */}
          <div className="cert-filters wow fadeInUp" data-wow-delay=".6s">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label} <span className="count">({filter.count})</span>
              </button>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="certifications-grid">
            {filteredCertifications.map((cert, index) => (
              <CertificationCard
                key={cert.id}
                certification={cert}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="cert-stats wow fadeInUp" data-wow-delay=".8s">
          <div className="stat-item">
            <h3>{certificationsData.length}+</h3>
            <p>Professional Certifications</p>
          </div>
          <div className="stat-item">
            <h3>4+</h3>
            <p>Certification Providers</p>
          </div>
          <div className="stat-item">
            <h3>2</h3>
            <p>Academic Degrees</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
