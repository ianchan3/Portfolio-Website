import { Link } from 'react-router-dom';
// import './NavBarReturn.css';
import Logo from '../Logo/Logo';

export default function NavBarReturn() {
  return (
    <main className="NavBar">
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <nav>
        <Link to ="/"><Logo /></Link>
        <Link to ="/#two" id="navbar" class="about">About Me</Link>
        <Link to ="/#three" id="navbar" class="projects">Projects</Link>
        <a href="https://drive.google.com/file/d/1c-psynSp7Jkzdxnr6Cq7Hd-Wow2ICx8a/view?usp=sharing" target="blank" id="navbar" class="resume">Resume</a>
        <a href="https://github.com/ianchan3/" target="blank" id="navbar"class="icon icon--github">
          <i id="navbar" class="ri-github-line"></i>
        </a>
        <a href="https://www.linkedin.com/in/ianchan-/" target= "blank" id="navbar"class="icon icon--linkedin">
          <i id="navbar" class="ri-linkedin-line"></i>
        </a>
      </nav>
    </main>
  );
}