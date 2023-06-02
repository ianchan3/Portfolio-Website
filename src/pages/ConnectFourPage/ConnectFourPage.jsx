import "./ConnectFourPage.css"
import NavBarReturn from "../../components/NavBarReturn/NavBarReturn";

export default function ConnectFourPage() {
  return (
    <main className="ConnectFourPage">
      <NavBarReturn />
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
      <h1 className="project-title">Connect Four</h1>
      <div className="horizontal-line-effect left"></div>
      <div className="horizontal-line-effect right"></div>
      <hr></hr>
      <h2>HTML | CSS | JavaScript</h2>
      <span className="links">
        <p>Play a game of Connect Four with your friends or family! First to 4 in a row, diagonal, vertical or horizontal, wins the game!</p>
        <p>Utilized JavaScript to create winning game logic, vertical, horizontal, and vertical, and HTML/CSS to create a polished user-friendly web browser game</p>
        <a href="https://ianchan3.github.io/Connect-Four/" target="_blank" className="icon icon--link">
          <i className="em em-link" ></i>
        </a>
        <br/>
        <a href="https://github.com/ianchan3/Connect-Four" target="_blank" className="icon icon--github">
          <i className="ri-github-line"></i>
        </a>
        <div className="projects">
          <img src="https://i.imgur.com/P16YjDD.jpg"></img>
          <img src="https://i.imgur.com/2e9rYAY.jpg"></img>
          <img src="https://i.imgur.com/QaFtFVM.jpg"></img>
          <img src="https://i.imgur.com/J6fMrXH.jpg"></img>
        </div>
      </span>
    </main>
  )
  }