import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import MobileApp from "./components/MobileApp";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState(false);

  const handleClickLaguage = (e) => {
    e.preventDefault();
    setLanguage(true);
  };

  const handleClickLaguageFalse = () => {
    setLanguage(false);
  };
  return (
    <>
      <Header
        language={language}
        handleClickLaguage={handleClickLaguage}
        handleClickLaguageFalse={handleClickLaguageFalse}
      />
      <HeroSection />
      <Categories />
      <MobileApp />
      <Cards />
      <Footer handleClickLaguage={handleClickLaguage} />
    </>
  );
}

export default App;
