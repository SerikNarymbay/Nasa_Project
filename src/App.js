import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import { NasaImage } from "./components/NasaImage";
import NasaPhoto from "./components/NasaPhoto";
import { NasaVideo } from "./components/NasaVideo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HomePage/>
        <Routes>
          
          <Route element={<NasaPhoto/>} path="/photo" />
          <Route element={<NasaImage/>} path= '/image'/>
          <Route element={<NasaVideo/>} path = '/video'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
