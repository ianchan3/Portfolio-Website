import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import DayNightFeature from '../DayNightFeature/DayNightFeature';


export default function NavBarReturn() {
  return (
    <main className="NavBar">
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <nav>
        <Link to ="/" className="logo"><Logo /></Link>
        <li><Link to ="/#two" className="navbar">About Me</Link></li>
        <li><Link to ="/#three" className="navbar">Projects</Link></li>
        <li><a href="https://drive.google.com/file/d/1c-psynSp7Jkzdxnr6Cq7Hd-Wow2ICx8a/view?usp=sharing" target="blank" className="navbar">Resume</a></li>
        <a href="https://github.com/ianchan3/" target="blank" id="navbar"class="icon icon--github">
          <i id="navbar" class="ri-github-line"></i>
        </a>
        <a href="https://www.linkedin.com/in/ianchan-/" target= "blank" id="navbar"class="icon icon--linkedin">
          <i id="navbar" class="ri-linkedin-line"></i>
        </a>
        <DayNightFeature />
      </nav>
    </main>
  );
}