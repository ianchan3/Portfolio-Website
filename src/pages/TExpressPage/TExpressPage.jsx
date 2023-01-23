import "./TExpressPage.css"
import NavBarReturn from "../../components/NavBarReturn/NavBarReturn";


export default function TExpressPage() {
  return (
    <main className="TExpressPage">
        <NavBarReturn />
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
      <h1>T Express  </h1>
      <h2>Vue | Node | Sequelize | Bootstrap</h2>
      <p>T Express is a application created to manage the logistics of shipments and pallets, used in real world, that allows employees to create shipments, organize pallets, and keep track of records. </p>
      <a href="https://texpress-dev.netlify.app/login/" target="blank" className="icon icon--link--texpress">
        <i className="em em-link" ></i>
      </a>
      <br/>
      <a href="https://github.com/ianchan3/Grow-Green" target="blank" className="icon icon--github--texpress">
        <i className="ri-github-line"></i>
      </a>
    </main>
  )
}