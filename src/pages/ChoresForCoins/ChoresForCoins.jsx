import "./ChoresForCoins.css";
import NavBarReturn from "../../components/NavBarReturn/NavBarReturn";

export default function ChoresForCoins() {
  return (
    <main className="ChoresForCoinsPage">
      <NavBarReturn />
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
      <h1 className="project-title">Chores For Coins </h1>
      <div className="horizontal-line-effect left"></div>
      <div className="horizontal-line-effect right"></div>
      <br></br>
      <h2>HTML | CSS | JavaScript | MongoDB | Express | React | Node | Redux</h2>
      <span className="links">
        <p>The mobile app was designed to assist parents in teaching their children the value of money and patience. </p>
        <p>Our mobile app rewards kids with coins for completing tasks or chores while working toward a goal or price agreed upon by their parents! </p> 
        <p>Track your child’s progress with a gameboard, and watch them get closer to their goal as they complete more chores!</p>
        <a href="https://grow-green-p4.herokuapp.com/" target="_blank" className="icon icon--link">
          <i className="em em-link" ></i>
        </a>
        <br/>
        <a href="https://github.com/ianchan3/Grow-Green" target="_blank" className="icon icon--github">
          <i className="ri-github-line"></i>
        </a>
      </span>
    <div className="projects">
      <img src="https://i.imgur.com/LGiw9OG.png"></img>
      <img src="https://i.imgur.com/oudHWrf.png"></img>
      <img src="https://i.imgur.com/3SAGlC7.png"></img>
      <img src="https://i.imgur.com/6P7PR3c.png"></img>
    </div>
  </main>
  )
}