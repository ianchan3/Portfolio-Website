import "./ProjectPage.css"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function ProjectPage() {
  AOS.init({
    duration: 1000,
  });

  return (
    <section id="three">
      <main className="ProjectPage">
        <h1>Projects</h1>
        <p>
          <Link to="/projects/TExpress"><img src="https://i.imgur.com/oXqGh1z.png" alt="T Express" data-aos="fade-left"></img></Link>
          <Link to="/projects/FeelTheHeat"><img src="https://i.imgur.com/4Cw2lUX.jpg" alt="Feel The Heat?" data-aos="flip-left"></img></Link>
          <Link to="/projects/Calculator"><img src="https://i.imgur.com/VtIlnQW.jpg" alt="Calculator App" data-aos="fade-right"></img></Link>
          <Link to="/projects/ConnectFour"><img src="https://i.imgur.com/ZaLPJld.jpg" alt="Connect Four" data-aos="fade-left"></img></Link>
          <Link to="/projects/GrowGreen"><img src="https://i.imgur.com/PCvd6LZ.png" alt="Grow Green" data-aos="flip-right"></img></Link>
          <Link to="/projects/LoveStruck"><img src="https://i.imgur.com/W3Mikdl.png" alt="LoveStruck" data-aos="fade-right"></img></Link>
        </p>
      </main>
    </section>
  )
}