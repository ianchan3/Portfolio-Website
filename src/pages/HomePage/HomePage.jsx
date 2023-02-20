import "./HomePage.css";
import ContactInformation from "../ContactInformation/ContactInformation";
import ProjectPage from "../ProjectPage/ProjectPage";
import TechnologiesPage from "../TechnologiesPage/TechnologiesPage";
import TypingFeature from "../TypingFeature/TypingFeature";

export default function HomePage() {

  return (
    <main className="HomePage">
      <section id="#" className="Welcome">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
        <h1>
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
      </section>
      <TechnologiesPage />
      <ProjectPage />
      <ContactInformation />
    </main>
  )
}