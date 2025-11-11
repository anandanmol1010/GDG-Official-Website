import About from "../components/About";
import Home from "../components/Home";
import DomeGallery from "../components/ui/DomeGalery";
export default function HomePage() {
  return (
    <div className="w-full  overflow-x-hidden">
      <Home />
      <About />
    </div>
  );
}
