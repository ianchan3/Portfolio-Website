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
        <h1>PROJECTS & EXPERIENCE</h1>
        <div className="horizontal-line-effect left"></div>
        <div className="horizontal-line-effect right"></div>
        <p>
          <Link className="projectPage-image"to="/projects/TExpress"><img src="https://i.imgur.com/oXqGh1z.png" alt="T Express" data-aos="fade-right"></img></Link>
          <div className="project-info-container" data-aos="fade-left">
            <span>T Express</span>
            <br></br>
            <span>Logistics Website</span>
            <br></br>
            <span>Vue | Node | Sequelize | Bootstrap</span>
            <h3 className="project-info">Currently, I am interning at T Express, a logistics and transportation company that ships packages to East Asia. As part of my role, I assist in implementing new features and fixing software bugs within the Vue, Sequelize, and BootStrap application. I also contribute in developing product features from initial design to final implementation, testing, and deployment. </h3>
          </div>
          <Link className="projectPage-image" id="ChoresForCoins" to="/projects/ChoresForCoins"><img src="https://i.imgur.com/xXd964v.png" alt="Chores For Coins" data-aos="flip-right"></img></Link>
          <div className="project-info-container" data-aos="fade-left">
            <span>Chores For Coins</span>
            <br></br>
            <span>1st Place Hackathon - General Assembly Spring 2023 Hackathon</span>
            <br></br>
            <span>Mobile Gamification App</span>
            <br></br>
            <span>HTML | CSS | JavaScript | MongoDB | Express | React | Node.js | Redux</span>
            <h3 className="project-info">1st Place Hackathon in my 1st Hackathon!!! Our team worked in agile environment with only 3 days to develop an app with the theme of gamification. The app was designed to assist parents in teaching their children the value of money and patience. Our app rewards kids with coins for completing tasks or chores while working toward a goal or price agreed upon by their parents! Track your child’s progress with a gameboard, and watch them get closer to their goal as they complete more chores!</h3>
          </div>
          <Link className="projectPage-image"to="/projects/WeatherPage"><img src="https://i.imgur.com/u5DwAWZ.jpg" alt="Weather Forecast" data-aos="flip-right"></img></Link>
          <div className="project-info-container" data-aos="fade-left">
            <span>Weather Forecast</span>
            <br></br>
            <span>Weather App</span>
            <br></br>
            <span>HTML | CSS | JavaScript | React</span>
            <h3 className="project-info">The weather app is designed to provide users with accurate and up-to-date weather information to help them plan their day or week. With an intuitive user interface, our app allows users to access current weather conditions, daily and weekly forecasts. </h3>
          </div>
          <Link className="projectPage-image"to="/projects/FeelTheHeat"><img src="https://i.imgur.com/4Cw2lUX.jpg" alt="Feel The Heat?" data-aos="flip-right"></img></Link>
          <div className="project-info-container" data-aos="fade-left">
            <span>Feel The Heat</span>
            <br></br>
            <span>Online Blog</span>
            <br></br>
            <span>HTML | CSS | JavaScript | MongoDB | Express | Node</span>
            <h3 className="project-info">Feel the Heat is a online web blog that allows users to access a wide range of informative article on our rapidly changing climate. It has full CRUD functionality and utilizes Google Oauth for the login/signup feature. </h3>
          </div>
          <Link className="projectPage-image"to="/projects/Calculator"><img src="https://i.imgur.com/VtIlnQW.jpg" alt="Calculator App" data-aos="fade-right"></img></Link>
          <div className="project-info-container" data-aos="fade-left">
            <span>Calculator</span>
            <br></br>
            <span>Web App</span>
            <br></br>
            <span>HTML | CSS | JavaScript</span>
           <h3 className="project-info">Calculator app with a splash of financial background design and keydown functionality. This calculator can handle arbitrary arithmetic calculations as well as additional functions such as parentheses, pi, square root, sqaure, and percentage.</h3>
          </div>
          <Link className="projectPage-image"to="/projects/ConnectFour"><img src="https://i.imgur.com/ZaLPJld.jpg" alt="Connect Four" data-aos="flip-right"></img></Link>
          <div className="project-info-container" data-aos="fade-left">
            <span>Connect Four</span>
            <br></br>
            <span>Game Web App</span>
            <br></br>
            <span>HTML | CSS | JavaScript</span>
            <h3 className="project-info">Connect Four is a two player strategy games that involves dropping colored discs into a grid. The design of the grid is 7 column wide and 6 rows tall. In order to win, the first player must connect 4 pieces in a row horizontally, vertically, or horizontally.</h3>
          </div>
          <Link className="projectPage-image"to="/projects/GrowGreen"><img src="https://i.imgur.com/PCvd6LZ.png" alt="Grow Green" data-aos="fade-right"></img></Link>
          <div className="project-info-container" data-aos="fade-left">
            <span>Grow Green</span>
            <br></br>
            <span>Donation Website</span>
            <br></br>
            <span>HTML | CSS | JavaScript | MongoDB | Express | React | Node</span>
            <h3 className="project-info">Grow Green is a donation website that enables users to donate money towards planting trees and fighting climate change. It has complete CRUD features and allows users to make donation, and view their donation history.</h3>
          </div>
          <Link className="projectPage-image"to="/projects/LoveStruck"><img src="https://i.imgur.com/W3Mikdl.png" alt="LoveStruck" data-aos="flip-right"></img></Link>
          <div className="project-info-container" data-aos="fade-left">
            <span>Love Struck</span>
            <br></br>
            <span>Date Recommendation Website</span>
            <br></br>
            <span>Python | Django | Materialize</span>
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