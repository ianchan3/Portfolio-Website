import "./ProjectPage.css"
import { Link } from "react-router-dom";


export default function ProjectPage() {
  return (
    <section id="three">
    <main className="ProjectPage">
      <h1>Projects</h1>
      <p>
        <Link to="/projects/TExpress"><img src="https://i.imgur.com/oXqGh1z.png" alt="Calculator App"></img></Link>
        <Link to="/projects/FeelTheHeat"><img src="https://i.imgur.com/4Cw2lUX.jpg" alt="Feel The Heat?"></img></Link>
        <Link to="/projects/Calculator"><img src="https://i.imgur.com/VtIlnQW.jpg" alt="Calculator App"></img></Link>
        <Link to="/projects/ConnectFour"><img src="https://i.imgur.com/ZaLPJld.jpg" alt="Connect Four"></img></Link>
        <Link to="/projects/GrowGreen"><img src="https://i.imgur.com/PCvd6LZ.png" alt="Grow Green"></img></Link>
        <Link to="/projects/LoveStruck"><img src="https://i.imgur.com/W3Mikdl.png" alt="LoveStruck"></img></Link>
      </p>
    </main>
  </section>
  )
}