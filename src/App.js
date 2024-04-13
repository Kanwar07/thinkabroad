import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/main/MainPage";
import ComingSoon from "./components/pages/ComingSoon";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
      </Routes>
    </>
  );
}

export default App;
