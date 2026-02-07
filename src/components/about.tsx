import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="about section-pt">
      <div className="container wow fadeInUp" data-wow-delay=".1s">
        <div className="section-title">
          <h3>About Me</h3>
          <span />
        </div>
        <h3 className="about-info wow fadeInUp" data-wow-delay=".2s">
          I am a Creative Technologist and Co-Founder of{" "}
          <span className="txt-orange">Blue Sands STEM Labs</span>, bringing
          over 6 years of experience across digital marketing, web development,
          branding, UI/UX design, and multimedia production.
        </h3>
        <div className="about-description wow fadeInUp" data-wow-delay=".45s">
          <p>
            I'm a versatile, results-driven professional with deep expertise in
            building and scaling digital brands. My work spans content creation,
            SEO and growth optimization, social media strategy, graphic design,
            and website development—enabling organizations to strengthen their
            digital presence and connect meaningfully with their audiences.
          </p>
          <p>
            I specialize in branding and visual storytelling, leveraging Adobe
            Creative Suite and Canva to craft compelling visual identities. My
            UI/UX approach prioritizes usability, accessibility, and clean
            design, while my videography skills using Premiere Pro, After
            Effects, and Filmora Pro allow me to produce engaging motion
            graphics and promotional media.
          </p>
          <p>
            As a certified Digital Marketing Specialist with credentials from
            Google, Meta, HubSpot, and Udacity, I combine strategic thinking
            with hands-on execution. I design, build, and optimize
            high-performance websites using WordPress, Wix, and Webflow,
            consistently delivering digital solutions that drive growth and
            long-term value.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 d-inline-flex flex-column justify-content-between">
            <div className="year-exp wow fadeInLeft" data-wow-delay=".5s">
              <div className="year-exp-txt text-center text-md-start">
                <span>6+</span>
                <h4 className="text-center text-md-start">
                  Years
                  <br />
                  Experience
                </h4>
              </div>
            </div>
            <Link href="#contact" className="bttn-round">
              <span className="btn-txt">
                Get In Touch <i className="bi bi-arrow-up-right" />
              </span>
            </Link>
          </div>
          <div className="col-md-6">
            <figure className="wow fadeInRight" data-wow-delay=".5s">
              <Image
                width={636}
                height={614}
                sizes="100vw"
                src="/images/about/profile-pic.png"
                alt="Kingsley Jerome Okechukwu"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
