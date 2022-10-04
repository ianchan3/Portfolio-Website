import "./ProjectPage.css";
import {Link} from "react-router-dom";

export default function ProjectPage () {
  return (
    <main className="ProjectPage">
      <h1>Projects</h1>
      <p>
      <Link to="/projects/ConnectFour"><img src="https://i.imgur.com/ZaLPJld.jpg" alt="Connect Four"></img></Link>
      <Link to="/projects/FeelTheHeat"><img src="https://i.imgur.com/WVQsRFd.jpg" alt="Feel The Heat?"></img></Link>
      <Link to="/projects/LoveStruck"><img src="https://i.imgur.com/W3Mikdl.png" alt="LoveStruck"></img></Link>
      <Link to="/projects/GrowGreen"><img src="https://i.imgur.com/PCvd6LZ.png" alt="Grow Green"></img></Link>
      </p>
    </main>
  )
}