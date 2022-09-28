import "./App.css";
import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import ProjectPage from "../ProjectPage/ProjectPage";
import ConnectFourPage from "../ConnectFourPage/ConnectFourPage";
import NavBar from "../../components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";


export default function App() {

  return (
    <main className="App">
      <NavBar />
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/projects" element={<ProjectPage/>}/>
          <Route path="/projects/ConnectFour" element={<ConnectFourPage/>}/>
      </Routes>
     
  
    </main>
  );
}

