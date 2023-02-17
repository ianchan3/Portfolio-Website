import "./FeelTheHeatPage.css"
import NavBarReturn from "../../components/NavBarReturn/NavBarReturn";

export default function FeelTheHeatPage() {
  return (
    <main className="FeelTheHeatPage">
      <NavBarReturn />
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
      <h1 className="project-title">Feel the Heat? </h1>
      <h2>HTML | CSS | JavaScript | MongoDB | Express.js | Node.js</h2>
      <div className="links">
        <p>Feel The Heat is a online blog community where users may post interesting articles to inform others about climate change and global warning.</p>
        <p>Implemented CRUD features so users may post comments to articles, update, and delete their own comments. The project is user centric and users may only delete their own comments and articles.</p>
        <a href="https://feeltheheatblog.herokuapp.com/" target="blank" className="icon icon--link">
          <i className="em em-link" ></i>
        </a>
        <br/>
        <a href="https://github.com/ianchan3/Climate-Change-Blog" target="blank" className="icon icon--github">
          <i className="ri-github-line"></i>
        </a>
      </div>
      <div className="projects">
        <img src="https://i.imgur.com/EA4iIUV.jpg"></img>
        <img src="https://i.imgur.com/pJYRfKn.jpg"></img>
        <img src="https://i.imgur.com/54svmvE.jpg"></img>
        <img src="https://i.imgur.com/5kQ4FPd.png"></img>
      </div>
    </main>
  )
}