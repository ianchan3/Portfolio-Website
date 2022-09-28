import "./App.css";
import HomePage from "../HomePage/HomePage";
import { Routes, Route } from "react-router-dom";


export default function App() {

  return (
    <main className="App">
      <Routes>
          <Route path="/" element={<HomePage/>}/>

      </Routes>
     
  
    </main>
  );
}

