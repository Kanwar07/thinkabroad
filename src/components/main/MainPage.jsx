import React from "react";
import AppSection from "../sections/appSection/AppSection";
import Journey from "../sections/journey/Journey";
import ReviewSection from "../sections/reviewSection/ReviewSection";
import ScholarshipSection from "../sections/scholarshipSection/ScholarshipSection";
import Section1Page from "../sections/section1/Section1Page";
import UniversitiesSection from "../sections/universitiesSection/UniversitiesSection";
import Footer from "../footer/Footer";

function MainPage() {
  return (
    <>
      <Section1Page />
      <Journey />
      <AppSection />
      <ScholarshipSection />
      <ReviewSection />
      <UniversitiesSection />
      <Footer />
    </>
  );
}

export default MainPage;
