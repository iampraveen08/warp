import React from "react";
import "./App.css";
import "./styles/Sections.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import SectionTen from "./components/SectionTen";
import content from "./file/content.json";

export default function App() {
  return (
    <div className="main-app">
      <Navbar />

      <div className="spacing">
        <Header />
        <hr />
        <SectionOne
          features="Appearance & Customization"
          data={content.SectionOne}
        />
        <SectionOne features="Modern text editing" data={content.SectionTwo} />
        <SectionOne features="Warp AI" data={content.SectionThree} />
        <SectionOne features="Warp Drive" data={content.SectionFour} />
        <SectionOne
          features="Collaboration for teams"
          data={content.SectionFive}
        />
        <SectionOne features="Usability" data={content.SectionSix} />
        <SectionOne features="Terminal basics" data={content.SectionSeven} />
        <SectionOne features="Privacy & security" data={content.SectionEight} />
        <SectionOne
          features="Integrations & extensions"
          data={content.SectionNine}
        />
        <SectionTen />
      </div>
    </div>
  );
}
