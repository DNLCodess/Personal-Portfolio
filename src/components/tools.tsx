// components/Tools/Tools.tsx
"use client";
import { toolsData } from "@/lib/mockData/toolsData";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Tools = () => {
  return (
    <section className="tools section-pt">
      <div className="container">
        <div className="section-title wow fadeInUp" data-wow-delay=".1s">
          <h3>Tools & Platforms</h3>
          <span />
        </div>

        <p className="tools-intro wow fadeInUp" data-wow-delay=".2s">
          Proficient in industry-standard tools for design, development,
          collaboration, and project management.
        </p>
      </div>

      <Swiper
        loop
        speed={2000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 2 },
          438: { slidesPerView: 3 },
          650: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          850: { slidesPerView: 6 },
          1050: { slidesPerView: 7 },
          1270: { slidesPerView: 8 },
          1470: { slidesPerView: 9 },
          1700: { slidesPerView: 10 },
        }}
        modules={[Autoplay]}
        className="tools-slider container-md wow fadeInUp"
        data-wow-delay=".5s"
      >
        {toolsData.map((tool, index) => (
          <SwiperSlide key={index}>
            <div className="tool-item">
              <figure>
                <Image
                  width={73}
                  height={73}
                  sizes="100vw"
                  src={tool.img}
                  alt={tool.name}
                />
              </figure>
              <span className="tool-name">{tool.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Tools;
