// components/Experience/Experience.tsx
"use client";
import { experienceData } from "@/lib/mockData/experiencesData";
import { useState } from "react";
import ExperienceCard from "./serviceCard";

const Experience = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="experience section-pt">
      <div className="container">
        <div className="section-title wow fadeInUp" data-wow-delay=".1s">
          <h3>Work Experience</h3>
          <span />
        </div>

        <div className="experience-intro wow fadeInUp" data-wow-delay=".2s">
          <p>
            Growth-focused digital strategies covering SEO, paid advertising,
            content, analytics, and conversion optimization across diverse
            industries.
          </p>
        </div>

        <div className="experience-timeline">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              index={index}
              experience={experience}
              activeId={activeId}
              toggleItem={toggleItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
