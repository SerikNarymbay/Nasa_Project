import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import { NasaImage } from "./components/NasaImage";
import NasaPhoto from "./components/NasaPhoto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage/>} path="/" />
          <Route element={<NasaPhoto/>} path="/photo" />
          <Route element={<NasaImage/>} path= '/image'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
