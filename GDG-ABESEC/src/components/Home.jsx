import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "./ui/Navbar";
import Squares from "./ui/Squares";

const Home = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const headingLRef = useRef(null);

  const splitText = (text, lIndex = -1) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        ref={i === lIndex ? headingLRef : null}
        className="inline-block will-change-transform"
        style={{ display: "inline-block", opacity: 0 }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  useEffect(() => {
    const animateLine = (ref, delay = 0, isHeading = false) => {
      const letters = ref.current.children;

      gsap.set(letters, {
        x: () => gsap.utils.random(-400, 400),
        y: () => gsap.utils.random(-300, 300),
        rotation: () => gsap.utils.random(-180, 180),
        scale: () => gsap.utils.random(0.5, 1.5),
        opacity: 0,
      });

      if (isHeading) {
        // Slower and more random animation for headings
        gsap.to(letters, {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 2.4,
          ease: "elastic.out(1, 0.7)",
          stagger: {
            each: 0.08,
            from: "random",
          },
          delay,
        });
      } else {
        gsap.to(letters, {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 1.8,
          ease: "elastic.out(1, 0.6)",
          stagger: {
            each: 0.05,
            from: "start",
          },
          delay,
        });
      }
    };

    animateLine(line1Ref, 0.2, true);
    animateLine(line2Ref, 0.9, true);
    animateLine(line3Ref, 1.6, false);

    gsap.to(headingLRef.current, {
      rotationX: 360,
      transformOrigin: "50% 50%",
      duration: 0.6,
      ease: "power2.inOut",
      repeat: -1,
      repeatDelay: 3,
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Squares
          direction="diagonal"
          speed={0.6}
          borderColor="#0e071f"
          squareSize={55}
          hoverFillColor="#0e071f"
        />
      </div>
      <div className="fixed top-6 left-4 md:top-10 md:left-10 z-20 flex flex-col gap-2 pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <img
            src="https://www.svgrepo.com/show/353810/google-developers.svg"
            className="h-10 w-12 sm:h-14 sm:w-16 md:h-16 md:w-20"
            alt="gdgLogo"
          />

          <div className="flex items-center gap-1 font-bold text-2xl sm:text-3xl md:text-4xl">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-300">o</span>
            <span className="text-green-500">g</span>
            <span className="text-blue-500">l</span>
            <span className="text-red-500">e</span>
          </div>
        </div>

        <div className="text-white text-lg sm:text-xl md:text-2xl tracking-wide -mt-2.5 ml-1">
          Developers Group
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 space-y-4">
        <h1
          ref={line1Ref}
          className="text-white font-extrabold leading-tight
                     text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px]"
        >
          {splitText("Welcome to Google", "Welcome to Goog".length)}
        </h1>

        <h1
          ref={line2Ref}
          className="text-white font-extrabold leading-tight
                     text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px]"
        >
          {splitText("Developers")}
        </h1>

        <h2
          ref={line3Ref}
          className="text-gray-300 font-semibold leading-tight
                     text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        >
          {splitText("on Campus ABESEC")}
        </h2>
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-20"></div>
      <Navbar />
    </div>
  );
};

export default Home;