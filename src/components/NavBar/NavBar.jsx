import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from '../Logo/Logo';


export default function NavBar() {
  return (
    <main className="NavBar">
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <nav>
        <Link to ="/"><Logo /></Link>
        <Link to ="/about" id="navbar">About Me</Link>
        <Link to ="/projects" id="navbar">Projects</Link>
        <a href="https://docs.google.com/document/d/1EMEfsu0zwqgJHVKndSi4qBsPwmtcKYDtrkuR-EGo5O0/edit?usp=sharing" target="blank" id="navbar">Resume</a>
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