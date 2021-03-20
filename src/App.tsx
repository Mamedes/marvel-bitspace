import React from "react";
import "./App.css";
import HeroCard from './components/card/HeroCard';
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />

      <div className="scrollWrapper">
        <div className="cardArea">
          <div className="cardAreaColumn">
            <HeroCard />
          </div>
          <div className="cardAreaColumn">
            <HeroCard />
            </div>
          <div className="cardAreaColumn">
            <HeroCard />
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
