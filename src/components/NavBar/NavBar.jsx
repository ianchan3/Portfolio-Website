import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from '../Logo/Logo';


export default function NavBar() {
  return (
    <main className="NavBar">
      <nav>
        <Link to ="/"><Logo /></Link>
        <Link to ="/about">About Me</Link>
        <Link to ="/projects">Projects</Link>
      </nav>
    </main>
  );
}