import "./App.css";
import NavBar from "./components/navbar/NavBar";
import AppSection from "./components/sections/appSection/AppSection";
import Journey from "./components/sections/journey/Journey";
import ReviewSection from "./components/sections/reviewSection/ReviewSection";
import ScholarshipSection from "./components/sections/scholarshipSection/ScholarshipSection";
import Section1Page from "./components/sections/section1/Section1Page";

function App() {
  return (
    <>
      <NavBar />
      <Section1Page />
      <Journey />
      <AppSection />
      <ScholarshipSection />
      <ReviewSection />
    </>
  );
}

export default App;
