// components/Skills/Skills.tsx (Updated - Text-based skills)
"use client";
import { skillsData } from "@/lib/mockData/skillsData";
import { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] =
    useState<string>("digital-marketing");

  const currentCategory = skillsData.find((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="skills-section section-pt">
      <div className="container">
        <div className="section-title wow fadeInUp" data-wow-delay=".3s">
          <h3>Skills & Expertise</h3>
          <span />
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs wow fadeInUp" data-wow-delay=".4s">
          {skillsData.map((category) => (
            <button
              key={category.id}
              className={`tab-btn ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        {currentCategory && (
          <div className="skills-content wow fadeInUp" data-wow-delay=".5s">
            <div className="skills-grid">
              {currentCategory.skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item wow fadeInUp"
                  data-wow-delay={`${0.5 + index * 0.05}s`}
                >
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.proficiency}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
