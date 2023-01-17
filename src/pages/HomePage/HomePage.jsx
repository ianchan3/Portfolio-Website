import "./HomePage.css";
import { Link } from "react-router-dom";


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
        <section id="three">
        <main className="ProjectPage">
        <h1>Projects</h1>
      <p>
      <Link to="/projects/ConnectFour"><img src="https://i.imgur.com/ZaLPJld.jpg" alt="Connect Four"></img></Link>
      <Link to="/projects/FeelTheHeat"><img src="https://i.imgur.com/4Cw2lUX.jpg" alt="Feel The Heat?"></img></Link>
      <Link to="/projects/LoveStruck"><img src="https://i.imgur.com/W3Mikdl.png" alt="LoveStruck"></img></Link>
      <Link to="/projects/GrowGreen"><img src="https://i.imgur.com/PCvd6LZ.png" alt="Grow Green"></img></Link>
      <Link to="/projects/Calculator"><img src="https://i.imgur.com/VtIlnQW.jpg" alt="Calculator App"></img></Link>
      </p>
      </main>
      </section>
      <div id="contact">
      <h1>Contact Details</h1>
        <h3>Phone Number: (626)888-0881</h3>
        <h3>Email Address: ianchan3138@gmail.com</h3>
        <h3>Location: Los Angeles, CA</h3>
        <h3>Check Me Out on These Platforms!</h3>
        <a href="https://github.com/ianchan3/" target="blank" className="icon icon--github">
          <i className="ri-github-line"></i>
        </a>
        <a href="https://www.linkedin.com/in/ianchan-/" target= "blank" className="icon icon--linkedin">
          <i className="ri-linkedin-line"></i>
        </a>
      </div>
    </main>
  )
}