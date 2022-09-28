import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <main className="NavBar">
      <nav>
        
        <Link to ="/">Home</Link>
        
        <Link to ="/about">About Me</Link>

        <Link to ="/projects">Projects</Link>
      </nav>
    </main>
  );
}