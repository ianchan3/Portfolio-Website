import "./WeatherPage.css"
import NavBarReturn from "../../components/NavBarReturn/NavBarReturn";


export default function WeatherPage() {
  return (
    <main className="WeatherPage">
      <NavBarReturn />
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
      <h1 className="project-title">Weather App</h1>
      <div className="horizontal-line-effect left"></div>
      <div className="horizontal-line-effect right"></div>
      <hr></hr>
      <h2>React | HTML | CSS | JavaScript</h2>
      <span className="links">
        <p>The weather app is designed to provide users with accurate and up-to-date weather information to help them plan their day or week. With an intuitive user interface, our app allows users to access current weather conditions, daily and weekly forecasts. </p>
        <a href="https://ianchanweatherapp.netlify.app/" target="_blank" className="icon icon--link">
          <i className="em em-link" ></i>
        </a>
        <br/>
        <a href="https://github.com/ianchan3/weather-app" target="_blank" className="icon icon--github">
          <i className="ri-github-line"></i>
        </a>
      </span>
      <div className="projects">
        <img src="https://i.imgur.com/F0013d0.jpg"></img>
        <img src="https://i.imgur.com/jVMitgX.png"></img>
        <img src="https://i.imgur.com/lhjgCHe.jpg"></img>
        <img src="https://i.imgur.com/zRxwyPy.png"></img>
      </div>
    </main>
  )
}