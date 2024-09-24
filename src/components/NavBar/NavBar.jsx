import './NavBar.css';
import Logo from '../Logo/Logo';
import DayNightFeature from '../DayNightFeature/DayNightFeature';

export default function NavBar() {
  return (
    <main className="NavBar">
      <script defer src="https://kit.fontawesome.com/1935d064dd.js" crossorigin="anonymous"></script>
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <nav>
        <li className='logo'><a href="#" id="logo"><Logo /></a></li>
        <li><a href="#two" className="navbar">Technologies</a></li>
        <li><a href="#three" className="navbar">Projects</a></li>
        <li><a href="https://drive.google.com/file/d/1WEbE-I4O-Uz0BlW_t9WH96k_stebgnY7/view?usp=sharing" target="blank" className="navbar">Resume</a></li>
        <a href="https://github.com/ianchan3/" title="Github" aria-label="Github Link " target="blank" id="icon"class="icon icon--github">
          <i id="icon" class="ri-github-line"></i>
        </a>
        <a href="https://www.linkedin.com/in/ianchan-/" title="Linkedin" aria-label="Linkedin Link" target= "blank" id="icon"class="icon icon--linkedin">
          <i id="icon" class="ri-linkedin-line"></i>
        </a>
        <DayNightFeature/>
      </nav>
    </main>
  );
}
