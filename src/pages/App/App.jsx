import "./App.css";
import HomePage from "../HomePage/HomePage";
import ProjectPage from "../ProjectPage/ProjectPage";
import ConnectFourPage from "../ConnectFourPage/ConnectFourPage";
import FeelTheHeatPage from "../FeelTheHeatPage/FeelTheHeatPage";
import LoveStruckPage from "../LoveStruckPage/LoveStruckPage";
import GrowGreenPage from "../GrowGreenPage/GrowGreenPage";
import NavBar from "../../components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <main className="App">
      <NavBar />
      <Routes id="routes">
        <Route path="/" element={<HomePage/>}/>
        <Route path="/projects" element={<ProjectPage/>}/>
        <Route path="/projects/ConnectFour" element={<ConnectFourPage/>}/>
        <Route path="/projects/FeelTheHeat" element={<FeelTheHeatPage/>}/>
        <Route path="/projects/LoveStruck" element={<LoveStruckPage/>}/>
        <Route path="/projects/GrowGreen" element={<GrowGreenPage/>}/>
      </Routes>
    <footer>ⓒ 2022 Ian Chan All Rights Reserved</footer>
    </main>
  );
}

