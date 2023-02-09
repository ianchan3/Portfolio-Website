import "./HomePage.css";
import ContactInformation from "../ContactInformation/ContactInformation";
import ProjectPage from "../ProjectPage/ProjectPage";
import TechnologiesPage from "../TechnologiesPage/TechnologiesPage";

export default function HomePage() {
  return (
    <main className="HomePage">
      <section id="#" className="Welcome">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
        <h1>Hi 👋, I'm Ian Chan!</h1>
        <p className="description">I'm a Full Stack Software Engineer who is passionate about utilizing different technologies to make a positive impact in the world. </p>
        <p className="description">With my background in finance and customer service, I am detailed-oriented, well organized, and have a strategic planning mindset.</p>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      </section>
      <TechnologiesPage />
      <ProjectPage />
      <ContactInformation />
    </main>
  )
}