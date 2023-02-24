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
        <h1>PROJECTS</h1>
        <div className="horizontal-line-effect left"></div>
        <div className="horizontal-line-effect right"></div>
        <p>
          <Link to="/projects/TExpress"><img src="https://i.imgur.com/oXqGh1z.png" alt="T Express" data-aos="fade-right"></img></Link>
          <div className="project-info-container" data-aos="fade-left">
            <span>T Express</span>
            <br></br>
            <span>Logistics Website</span>
            <h3 className="project-info">T Express is a multiservice logistic and transport company that sends shipment overseas to East Asia.</h3>
          </div>
          <Link to="/projects/FeelTheHeat"><img src="https://i.imgur.com/4Cw2lUX.jpg" alt="Feel The Heat?" data-aos="flip-right"></img></Link>
          <div className="project-info-container" data-aos="fade-left">
            <span>Feel The Heat</span>
            <br></br>
            <span>Online Blog</span>
            <h3 className="project-info">Feel the Heat is a online web blog that allows users to access a wide range of informative article on our rapidly changing climate. It has full CRUD functionality and utilizes Google Oauth for the login/signup feature. </h3>
          </div>
          <Link to="/projects/Calculator"><img src="https://i.imgur.com/VtIlnQW.jpg" alt="Calculator App" data-aos="fade-right"></img></Link>
          <div className="project-info-container" data-aos="fade-left">
            <span>Calculator</span>
            <br></br>
            <span>Web App</span>
           <h3 className="project-info">Calculator App with a splash of financial background design and keydown functionality. This calculator can handle arbitrary arithmetic calculations as well as additional functions such as parentheses, pi, square root, sqaure, and percentage.</h3>
          </div>
          <Link to="/projects/ConnectFour"><img src="https://i.imgur.com/ZaLPJld.jpg" alt="Connect Four" data-aos="flip-right"></img></Link>
          <div className="project-info-container" data-aos="fade-left">
            <span>Connect Four</span>
            <br></br>
            <span>Game Web App</span>
            <h3 className="project-info">Connect Four is a two player strategy games that involves dropping colored discs into a grid. The design of the grid is 7 column wide and 6 rows tall. In order to win, the first player must connect 4 pieces in a row horizontally, vertically, or horizontally.</h3>
          </div>
          <Link to="/projects/GrowGreen"><img src="https://i.imgur.com/PCvd6LZ.png" alt="Grow Green" data-aos="fade-right"></img></Link>
          <div className="project-info-container" data-aos="fade-left">
            <span>Grow Green</span>
            <br></br>
            <span>Donation Website</span>
            <h3 className="project-info">Grow Green is a donation website that enables users to donate money towards planting trees and fighting climate change. It has complete CRUD features and allows users to make donation, and view their donation history.</h3>
          </div>
          <Link to="/projects/LoveStruck"><img src="https://i.imgur.com/W3Mikdl.png" alt="LoveStruck" data-aos="flip-right"></img></Link>
          <div className="project-info-container" data-aos="fade-left">
            <span>Love Struck</span>
            <br></br>
            <span>Date Recommendation Website</span>
            <h3 className="project-info">Love Struck is a online date planning website that allows you to get fantastic recommendations based off other user. Users can keep track of all the locations they have been to and give a rating based on the experience. </h3>
          </div>
        </p>
        <div className="horizontal-line-effect left"></div>
        <div className="horizontal-line-effect right"></div>
        <br></br>
        <div className="horizontal-line-effect left"></div>
        <div className="horizontal-line-effect right"></div>
        <br></br>
        <div className="horizontal-line-effect left"></div>
        <div className="horizontal-line-effect right"></div>
        <br></br>
      </main>
    </section>
  )
}