import "./ProjectPage.css";
import { Link } from "react-router-dom";

export default function ProjectPage () {
  return (
    <main class="ProjectPage">
      <h1>Projects</h1>
      <Link to="/projects/ConnectFour">Connect Four</Link>
    </main>
  )
}