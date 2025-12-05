import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import StatsSection from "./StatsSection";

const CardContainer = ({ children, className = "" }) => {
  const containerRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateY(((x - centerX) / centerX) * 10);
    setRotateX(((centerY - y) / centerY) * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={containerRef}
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.1s ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const CardBody = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>;
};

const CardItem = ({ children, translateZ = 0 }) => {
  return (
    <div
      style={{
        transform: `translateZ(${translateZ}px)`,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      offset: 150,
    });
  }, []);

  return (
    <>
      <section id="about" className="min-h-screen bg-[#0a0a0a] py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold text-[#e5e5e5] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              About{" "}
              <span className="text-[#4285F4]">
                Us
              </span>
            </h2>

            <div className="h-[2px] w-64 rounded-full mx-auto bg-[#4285F4]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
            <div className="order-2 lg:order-1" data-aos="fade-up">
              <p className="text-[#a3a3a3] text-left text-lg font-normal leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Google Developer Groups (GDG) on Campus ABESEC is a vibrant
                community driven by curiosity, collaboration, and innovation. We
                bring together passionate developers, designers, and
                problem-solvers to explore technologies and turn ideas into
                impactful projects. Through workshops, hackathons, and sessions,
                GDG ABESEC empowers students to learn, build, and grow in a
                supportive ecosystem bridging classroom learning with real-world
                experience.
              </p>
            </div>

            <div className="order-1 lg:order-2" data-aos="fade-up">
              <CardContainer>
                <CardBody className="relative rounded-2xl overflow-hidden border border-[#2a2a2a] bg-[#151515] backdrop-blur-sm  transition-all duration-300">
                  <CardItem translateZ={100}>
                    <img
                      src="/about-img1.jpg"
                      alt="GDG Community"
                      className="w-full h-80 object-cover rounded-2xl"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
    </>
  );
}