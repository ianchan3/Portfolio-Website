import "./HomePage.css";
import ContactInformation from "../ContactInformation/ContactInformation";
import ProjectPage from "../ProjectPage/ProjectPage";
import TechnologiesPage from "../TechnologiesPage/TechnologiesPage";
import TypingFeature from "../TypingFeature/TypingFeature";
import ScrollToTopFeature from "../../components/ScrollToTopFeature/ScrollToTopFeature";

export default function HomePage() {
  window.onscroll = () => scrollProgress();

function scrollProgress() {
  const currentState = document.body.scrollTop || document.documentElement.scrollTop;

  const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const scrollPercentage = (currentState / pageHeight ) * 100;

  const progressBar = document.querySelector(".progress");

  progressBar.style.visibility = "visible";
  progressBar.style.width = scrollPercentage + "%";
}
  return (
    <main className="HomePage">
      <div className="scroll-indicator">
        <div className="progress"></div>
      </div>
      <section id="Welcome" className="Welcome">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
        <h1 id="greeting">
          Hi 
          <span class="wave">
            👋
          </span>
          , I'm Ian Chan!
        </h1>
        <TypingFeature />
        <p className="description">I'm a Full Stack Software Engineer who is passionate about utilizing different technologies to make a positive impact in the world. </p>
        <p className="description">With my background in finance and customer service, my strong communication, problem-solving, and attention to detail skills makes me a great candidate for any software engineer role.</p>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
        <div class="home-hero__mouse-scroll-cont">
          <div class="mouse"></div>
        </div>
      </section>
      <TechnologiesPage />
      <ProjectPage />
      <ScrollToTopFeature />
      <ContactInformation />
    </main>
  )
}