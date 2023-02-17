import './NavBar.css';
import Logo from '../Logo/Logo';
import DayNightFeature from '../DayNightFeature/DayNightFeature';

export default function NavBar() {
  return (
    <main className="NavBar">
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <nav>
        <li className='logo'><a href="#" id="logo"><Logo /></a></li>
        <li><a href="#two" id="navbar">Technologies</a></li>
        <li><a href="#three" id="navbar">Projects</a></li>
        <a href="https://drive.google.com/file/d/1ka4cuzDJfVQzdXGvvTr48adBIkUgSzo_/view?usp=sharing" target="blank" id="navbar" class="resume">Resume</a>
        <a href="https://github.com/ianchan3/" target="blank" id="icon"class="icon icon--github">
          <i id="icon" class="ri-github-line"></i>
        </a>
        <a href="https://www.linkedin.com/in/ianchan-/" target= "blank" id="icon"class="icon icon--linkedin">
          <i id="icon" class="ri-linkedin-line"></i>
        </a>
        <DayNightFeature />
      </nav>
    </main>
  );
}
