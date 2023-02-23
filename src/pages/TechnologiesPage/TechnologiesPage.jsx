import "./TechnologiesPage.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TechnologiesPage() {
  AOS.init({
    duration: 1000,
  });
  return (
    <section id="two">
      <main className="TechnologyPage">
        <span className="Technologies">
          <h1>Technologies Used</h1>
          <br/>
          <span className="technologies-container">
            <i className="devicon-html5-plain colored" data-aos="flip-left"></i>
            <i className="devicon-css3-plain colored" data-aos="flip-left"></i>
            <i className="devicon-javascript-plain colored" data-aos="flip-left"></i>
            <i className="devicon-mongodb-plain colored" data-aos="flip-left"></i>
            <h1 className="skills" data-aos="flip-left">HTML</h1>
            <h1 className="skills" data-aos="flip-left">CSS</h1>
            <h1 className="skills" data-aos="flip-left">JavaScript</h1>
            <h1 className="skills" data-aos="flip-left">MongoDB</h1>
            <i className="devicon-express-original colored" data-aos="flip-left"></i>
            <i className="devicon-react-original colored" data-aos="flip-left"></i>
            <i className="devicon-nodejs-plain colored" data-aos="flip-left"></i>
            <i className="devicon-python-plain colored" data-aos="flip-left"></i>
            <h1 className="skills" data-aos="flip-left">Express.js</h1>
            <h1 className="skills" data-aos="flip-left">React</h1>
            <h1 className="skills" data-aos="flip-left">Node.js</h1>
            <h1 className="skills" data-aos="flip-left">Python</h1>
            <i className="devicon-django-plain colored" data-aos="flip-left"></i>
            <i className="devicon-github-original colored" data-aos="flip-left"></i>
            <i className="devicon-postgresql-plain colored" data-aos="flip-left"></i>
            <i className="devicon-heroku-original colored" data-aos="flip-left"></i>
            <h1 className="skills" data-aos="flip-left">Django</h1>
            <h1 className="skills" data-aos="flip-left">Github</h1>
            <h1 className="skills" data-aos="flip-left">PostgreSQL</h1>
            <h1 className="skills" data-aos="flip-left">Heroku</h1>
          </span>    
        </span>
      </main>
    </section>
  )
}