import "./LoveStruckPage.css"
import NavBarReturn from "../../components/NavBarReturn/NavBarReturn";

export default function LoveStruckPage() {
  return (
    <main className="LoveStruckPage">
      <NavBarReturn />
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
      <h1 className="project-title">Love Struck </h1>
      <div className="horizontal-line-effect left"></div>
      <div className="horizontal-line-effect right"></div>
      <hr></hr>
      <h2>Python | Django | Materialize</h2>
      <div className="links">
        <p>Don't know where to go on your next date? We got you! Lovestruck is a date planning website that provides fantasic date ideas recommended by other users.</p>
        <p>Implemented CRUD features so users may create dates, partners, and locations. However, users are only able to edit any partner, location, or dates that they made </p>
        <a href="https://lovestruck.herokuapp.com/" target="_blank" className="icon icon--link">
          <i className="em em-link" ></i>
        </a>
        <br/>
        <a href="https://github.com/mkbozai/lovestruck" target="_blank" className="icon icon--github">
          <i className="ri-github-line"></i>
        </a>
      </div>
      <div className="projects">
        <img src="https://i.imgur.com/7kL1KfS.jpg"></img>
        <img src="https://i.imgur.com/JaAw8Wj.png"></img>
        <img src="https://i.imgur.com/gw5pjyV.png"></img>
        <img src="https://i.imgur.com/VYc9EiF.png"></img>
      </div>
    </main>
  )
}