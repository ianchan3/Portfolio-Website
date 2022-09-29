import "./ProjectPage.css";
import { Link } from "react-router-dom";

export default function ProjectPage () {
  return (
    <main class="ProjectPage">
      <h1>Projects</h1>
      <body>
      <Link to="/projects/ConnectFour">Connect Four</Link>
      <Link to="/projects/FeelTheHeat">Feel The Heat?</Link>
      <Link to="/projects/LoveStruck">LoveStruck</Link>
      <Link to="/projects/GrowGreen">Grow Green</Link>
     
      </body>
    </main>
  )
}