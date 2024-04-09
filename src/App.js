import "./App.css";
import NavBar from "./components/navbar/NavBar";
import AppSection from "./components/sections/appSection/AppSection";
import Journey from "./components/sections/journey/Journey";
import Section1Page from "./components/sections/section1/Section1Page";

function App() {
  return (
    <>
      <NavBar />
      <Section1Page />
      <Journey />
      <AppSection />
    </>
  );
}

export default App;
