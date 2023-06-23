import "./RestaurantPage.css"
import NavBarReturn from "../../components/NavBarReturn/NavBarReturn";

export default function RestaurantPage() {
  return (
    <main className="RestaurantPage">
      <NavBarReturn />
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
      <h1 className="project-title">My Restaurant </h1>
      <div className="horizontal-line-effect left"></div>
      <div className="horizontal-line-effect right"></div>
      <hr></hr>
      <h2>HTML | CSS | React | Material UI </h2>
      <div className="links">
        <p>Drooling for food? We got you covered! Check out our restaurant website that shows our menu, drinks & cocktails, awards, social media posts, and the history of the restaurant.</p>
        <p>Have a problem? Contact us using the Contact Us Form at the bottom of the website!</p>
        <a href="https://ianchanrestaurantapp.netlify.app/" target="_blank" className="icon icon--link">
          <i className="em em-link" ></i>
        </a>
        <br/>
        <a href="https://github.com/ianchan3/Restaurant-App" target="_blank" className="icon icon--github">
          <i className="ri-github-line"></i>
        </a>
      </div>
      <div className="projects">
        <img src="https://i.imgur.com/N5k0etr.jpg"></img>
        <img src="https://i.imgur.com/OabyN6O.jpg"></img>
        <img src="https://i.imgur.com/3wiP6DQ.jpg"></img>
        <img src="https://i.imgur.com/Ix8XRZC.jpg"></img>
      </div>
    </main>
  )
}