import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Navbar from "./ui/Navbar";
import logo from "/logo.png";
import pastMembers from "../data/pastMembers";
import "../styles/Legacy.css";

/* ============================================================
   SOCIAL LINK ICONS
============================================================ */
const LinkedInIcon = () => (
  <svg className="lg-social-icon" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="lg-social-icon" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

/* ============================================================
   ALUMNI CARD — Unique horizontal layout
============================================================ */
const AlumniCard = ({ member, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });
  
  // Alternate slide-in direction based on index
  const isReverse = index % 2 !== 0;
  const initialX = isReverse ? 100 : -100;
  
  const x = useTransform(scrollYProgress, [0, 1], [initialX, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <motion.div
        ref={cardRef}
        style={{ x, opacity }}
        className={`lg-alumni-card ${isReverse ? "reverse" : ""}`}
      >
        <div className="lg-alumni-img-wrap">
          <img src={member.img} alt={member.name} className="lg-alumni-img" />
        </div>
        
        <div className="lg-alumni-info">
          {/* Giant background number */}
          <span className="lg-alumni-number">
            {(index + 1).toString().padStart(2, "0")}
          </span>

          {member.badge && (
            <span className="lg-alumni-badge">{member.badge}</span>
          )}
          <h3 className="lg-alumni-name">{member.name}</h3>
          <p className="lg-alumni-role">{member.role}</p>
          <p className="lg-alumni-contribution">{member.contribution}</p>
          
          <div className="lg-alumni-socials">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="lg-social-link lg-linkedin"
            >
              <LinkedInIcon />
            </a>
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="lg-social-link lg-github"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </motion.div>
      <div className="lg-alumni-divider" />
    </>
  );
};

/* ============================================================
   SECTION HEADING
============================================================ */
const SectionHeading = ({ title }) => {
  const headingRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start end", "center center"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [300, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <motion.div
      ref={headingRef}
      style={{ x, opacity }}
      className="lg-batch-heading"
    >
      <h2 className="lg-batch-title">{title}</h2>
    </motion.div>
  );
};

/* ============================================================
   MAIN LEGACY COMPONENT
============================================================ */
const Legacy = () => {
  const [showBrandText, setShowBrandText] = useState(true);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      setShowBrandText(currentScrollY < windowHeight);

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsNavbarVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsNavbarVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navAnimationClass = `transition-transform duration-300 ease-in-out ${
    isNavbarVisible ? "translate-y-0" : "-translate-y-[250%]"
  }`;

  return (
    <div className="lg-wrapper">
      {/* ===== BRANDING ===== */}
      <div className="fixed top-4 left-4 md:top-8 md:left-8 z-20 flex flex-col gap-2 pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <img
            src={logo}
            className="h-8 w-10 sm:h-12 sm:w-14 md:h-14 md:w-20"
            alt="gdgLogo"
          />
          <AnimatePresence>
            {showBrandText && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex items-center gap-0.5 font-bold text-xl sm:text-2xl md:text-3xl"
              >
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-300">o</span>
                <span className="text-green-500">g</span>
                <span className="text-blue-500">l</span>
                <span className="text-red-500">e</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {showBrandText && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-white text-sm sm:text-base md:text-lg tracking-wide ml-0.5"
            >
              Developer Groups
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ===== NAVBAR ===== */}
      <Navbar className={navAnimationClass} />

      {/* ===== HERO — Exact Team page style ===== */}
      <section className="lg-hero">
        <div className="lg-hero-grid">
          <div className="grid-line-h" style={{ top: "25%" }} />
          <div className="grid-line-h" style={{ top: "50%" }} />
          <div className="grid-line-h" style={{ top: "75%" }} />
          <div className="grid-line-v" style={{ left: "25%" }} />
          <div className="grid-line-v" style={{ left: "50%" }} />
          <div className="grid-line-v" style={{ left: "75%" }} />
        </div>

        <div className="lg-hero-content">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="lg-hero-badge">THE LEGACY WALL</span>
          </motion.div>

          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative inline-block px-4 text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter"
            style={{
              background: "linear-gradient(135deg, #fff 0%, #888 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            <motion.span
              initial={{ backgroundSize: "0% 4px" }}
              animate={{ backgroundSize: "100% 4px" }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              className="inline leading-[1.25] bg-[linear-gradient(#ffffff,#ffffff)] bg-no-repeat bg-[position:50%_100%] pb-1 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]"
            >
              PAST MEMBERS
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg-hero-subtitle"
          >
            The ones who shaped our community
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg-hero-scroll"
          >
            <span>Scroll down to explore</span>
          </motion.div>
        </div>
      </section>

      {/* ===== BATCH-WISE ALUMNI ===== */}
      <div className="lg-batches">
        {pastMembers.map((batch) => (
          <div key={batch.year} className="lg-batch">
            <SectionHeading title={batch.year} />
            <div className="lg-batch-meta">
              <span className="lg-batch-year">BATCH {batch.year}</span>
              <span className="lg-batch-count">
                {batch.members.length} MEMBERS
              </span>
            </div>
            
            {batch.members.map((member, i) => (
              <AlumniCard
                key={`${batch.year}-${member.name}`}
                member={member}
                index={i}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legacy;
