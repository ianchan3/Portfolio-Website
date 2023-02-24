import "./TExpressPage.css"
import NavBarReturn from "../../components/NavBarReturn/NavBarReturn";

export default function TExpressPage() {
  return (
    <main className="TExpressPage">
      <NavBarReturn />
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
      <h1 className="project-title">T Express</h1>
      <div className="horizontal-line-effect left"></div>
      <div className="horizontal-line-effect right"></div>
      <br></br>
      <h2>Vue | Node | Sequelize | Bootstrap</h2>
      <span className="links">
        <p>T Express is a application created to manage the logistics of shipments and pallets, used in real world, that allows employees to create shipments, organize pallets, and keep track of records. </p>
        <a href="https://texpress-dev.netlify.app/login/" target="blank" className="icon icon--link">
          <i className="em em-link" ></i>
        </a>
        <br/>
      </span>
      <div className="projects">
        <img src="https://i.imgur.com/sZlpd8W.pngg"></img>
        <img src="https://i.imgur.com/6CnD6nm.png"></img>
      </div>
    </main>
  )
}