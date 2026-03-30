import Navbar from "./components/navbar"
import  HomeContent  from "./components/mypage";
import About from "./about/page";
import Experience from "./experience/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div>
    <Navbar />
    <HomeContent />
    <About />
    <Experience />
    <Projects />
    <Contact />

    </div>
  );
}
