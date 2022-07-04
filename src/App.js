import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

import { HomePage } from "./Pages/HomePage";
import NasaPhoto from "./Pages/NasaDailyPhoto";
import { NasaVideo } from "./Pages/NasaVideo";
import backGround from "./backgroundVideo/Earth_Background.mp4";

function App() {
  return (
    <div className="App">
      <video className="video_background" src={backGround} autoPlay loop/>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<NasaPhoto />} path="/photo" />
          <Route element={<HomePage />} path="/" />
          <Route element={<NasaVideo />} path="/video" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
