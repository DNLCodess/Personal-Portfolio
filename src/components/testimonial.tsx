// components/Testimonial/Testimonial.tsx
"use client";
import type { Testimonial } from "@/lib/mockData/testimonialsData";
import { testimonialsData } from "@/lib/mockData/testimonialsData";
import Image from "next/image";
import { useState } from "react";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1,
    );
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section
      id="testimonial"
      className="testimonial position-relative section-pt"
    >
      <div className="container">
        <div className="section-title wow fadeInUp" data-wow-delay=".3s">
          <h3>What Clients Say</h3>
          <span />
        </div>

        <figure className="quate-wrapper wow fadeInUp" data-wow-delay=".6s">
          <Image
            width={104}
            height={76}
            src="/images/testimonial/quate.png"
            alt="quote"
          />
        </figure>

        <figure className="style">
          <Image
            width={90}
            height={98}
            src="/images/testimonial/style.svg"
            alt="style"
          />
        </figure>

        <figure className="arrow">
          <Image
            width={330}
            height={36}
            src="/images/testimonial/arrow.svg"
            alt="arrow"
          />
        </figure>

        <div className="slider-wrapper">
          <div className="slider-container">
            <div className="testimonial-card wow fadeInUp" data-wow-delay=".5s">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <i className="bi bi-quote" />
                </div>
                <h5 className="testimonial-text">{currentTestimonial.text}</h5>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {currentTestimonial.author.charAt(0)}
                  </div>
                  <div className="author-info">
                    <h6 className="author-name">{currentTestimonial.author}</h6>
                    <p className="author-role">
                      {currentTestimonial.role}
                      {currentTestimonial.company && (
                        <>
                          {" "}
                          at{" "}
                          <span className="company">
                            {currentTestimonial.company}
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="buttons">
              <span
                className="prev"
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                <i className="fa-solid fa-arrow-left" />
              </span>
              <span
                className="next"
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <i className="fa-solid fa-arrow-right" />
              </span>
            </div>

            {/* Pagination dots */}
            <div className="pagination-dots">
              {testimonialsData.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
