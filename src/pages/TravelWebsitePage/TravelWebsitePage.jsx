import "./TravelWebsitePage.css"
import NavBarReturn from "../../components/NavBarReturn/NavBarReturn";

export default function TravelWebsitePage() {
  return (
    <main className="TravelWebsitePage">
      <NavBarReturn />
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
      <h1 className="project-title">Let's Travel!</h1>
      <div className="horizontal-line-effect left"></div>
      <div className="horizontal-line-effect right"></div>
      <hr></hr>
      <h2>React | HTML | CSS | Material UI</h2>
      <span className="links">
        <p>Don't know what to do when you travel? Use our website to find the best restaurants, hotels, and attractions near you! </p>
        <p>This app has utilizes several third party APIs such as OpenWeather, Geolocation, and Google Maps to help find things to do in your area or anywhere in the world! </p>
        <a href="https://ianchantravelwebsite.herokuapp.com/" target="_blank" className="icon icon--link">
          <i className="em em-link" ></i>
        </a>
        <br />
        <a href="https://github.com/ianchan3/travel-website" target="_blank" className="icon icon--github">
          <i className="ri-github-line"></i>
        </a>
        <br/>
      </span>
      <div className="projects">
        <img src="https://i.imgur.com/jIGIGFX.jpg"></img>
        <img src="https://i.imgur.com/3xKUXke.jpg"></img>
      </div>
    </main>
  )
}
