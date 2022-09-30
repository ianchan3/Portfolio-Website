import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from '../Logo/Logo';


export default function NavBar() {
  return (
    <main className="NavBar">
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <nav>
        <Link to ="/"><Logo /></Link>
        <Link to ="/about" id="About">About Me</Link>
        <Link to ="/projects" id="Projects">Projects</Link>
        <a href="https://github.com/ianchan3/" target="blank" class="icon icon--github">
          <i class="ri-github-line"></i>
        </a>
        <a href="https://www.linkedin.com/in/ianchan-/" target= "blank" class="icon icon--linkedin">
          <i class="ri-linkedin-line"></i>
        </a>
      </nav>
    </main>
  );
}