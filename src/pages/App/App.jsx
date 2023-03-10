import "./App.css";
import HomePage from "../HomePage/HomePage";
import ConnectFourPage from "../ConnectFourPage/ConnectFourPage";
import FeelTheHeatPage from "../FeelTheHeatPage/FeelTheHeatPage";
import LoveStruckPage from "../LoveStruckPage/LoveStruckPage";
import CalculatorPage from "../CalculatorPage/CalculatorPage";
import GrowGreenPage from "../GrowGreenPage/GrowGreenPage";
import TExpressPage from "../TExpressPage/TExpressPage";
import WeatherPage from "../WeatherPage/WeatherPage";
import NavBar from "../../components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <main className="App">
      <NavBar />
      <Routes id="routes">
        <Route path="/" element={<HomePage/>}/>
        <Route path="/projects/ConnectFour" element={<ConnectFourPage/>}/>
        <Route path="/projects/FeelTheHeat" element={<FeelTheHeatPage/>}/>
        <Route path="/projects/WeatherPage" element={<WeatherPage/>}/>
        <Route path="/projects/LoveStruck" element={<LoveStruckPage/>}/>
        <Route path="/projects/GrowGreen" element={<GrowGreenPage/>}/>
        <Route path="/projects/Calculator" element={<CalculatorPage/>}/>
        <Route path="/projects/TExpress" element={<TExpressPage/>}/>
      </Routes>
    <footer>ⓒ 2022 Ian Chan All Rights Reserved</footer>
    </main>
  );
}

