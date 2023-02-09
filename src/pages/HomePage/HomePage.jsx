import "./HomePage.css";
import ContactInformation from "../ContactInformation/ContactInformation";
import ProjectPage from "../ProjectPage/ProjectPage";

export default function HomePage() {
  return (
    <main className="HomePage">
      <section id="#" className="Welcome">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
        <h1>Hi , I'm Ian Chan!</h1>
        <p className="description">I'm a Full Stack Software Engineer who is passionate about utilizing different technologies to make a positive impact in the world. </p>
        <p className="description">With my background in finance and customer service, I am detailed-oriented, well organized, and have a strategic planning mindset.</p>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      </section>
      <section id="two">
        <main className="TechnologyPage">
          <span className="Technologies">
            <h1>Technologies Used</h1>
            <br/>
            <span className="technologies-container">
              <i className="devicon-html5-plain colored"></i>
              <i className="devicon-css3-plain colored"></i>
              <i className="devicon-javascript-plain colored"></i>
              <i className="devicon-github-original colored"></i>
              <i className="devicon-mongodb-plain colored"></i>
              <i className="devicon-express-original colored"></i>
              <h1 className="skills">HTML</h1>
              <h1 className="skills">CSS</h1>
              <h1 className="skills">JavaScript</h1>
              <h1 className="skills">Github</h1>
              <h1 className="skills">MongoDB</h1>
              <h1 className="skills">Express.js</h1>
              <i className="devicon-react-original colored"></i>
              <i className="devicon-nodejs-plain colored"></i>
              <i className="devicon-python-plain colored"></i>
              <i className="devicon-django-plain colored"></i>
              <i className="devicon-postgresql-plain colored"></i>
              <i className="devicon-heroku-original colored"></i>
              <h1 className="skills">React</h1>
              <h1 className="skills">Node.js</h1>
              <h1 className="skills">Python</h1>
              <h1 className="skills">Django</h1>
              <h1 className="skills">PostgreSQL</h1>
              <h1 className="skills">Heroku</h1>
            </span>    
            <br/>
          </span>
        </main>
      </section>
      <ProjectPage />
      <ContactInformation />
    </main>
  )
}