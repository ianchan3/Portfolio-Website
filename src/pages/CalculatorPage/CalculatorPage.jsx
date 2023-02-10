import "./CalculatorPage.css";
import NavBarReturn from "../../components/NavBarReturn/NavBarReturn";

export default function CalculatorPage() {
  return (
    <main className="CalculatorPage">
      <NavBarReturn />
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
      <h1>Calculator App</h1>
      <h2>HTML | CSS | JavaScript</h2>
      <p>Try this nifty calculator with a splash of financial background design</p>
      <p>This calculator app can handle arithmetic calculations along with other functions such as parentheses, pi, square root, squared and percentage.</p>
      <span className="CalculatorDescription">
        <a href="https://ianchancalculatorapp.netlify.app/" target="blank" className="icon icon--link--calculator">
          <i className="em em-link" ></i>
        </a>
        <br/>
        <a href="https://github.com/ianchan3/Calculator-App" target="blank" className="icon icon--github--calculator">
          <i className="ri-github-line"></i>
        </a>
        <div className="projects">
          <img src="https://i.imgur.com/03oF38q.jpg"></img>
          <img src="https://i.imgur.com/sF548r0.jpg"></img>
        </div>
      </span>
    </main>
  )
}