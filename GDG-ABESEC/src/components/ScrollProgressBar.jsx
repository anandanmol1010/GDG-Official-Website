import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [width, setWidth] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercent = (scrollTop / docHeight) * 100;
    setWidth(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[4px] bg-indigo-600 z-[9999] transition-all duration-150 ease-out"
      style={{ width: `${width}%` }}
    />
  );
}
