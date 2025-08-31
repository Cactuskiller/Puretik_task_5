import React, { useState } from "react";
import "../index.css";

const HeroCom = () => {
  const [selectedOption, setSelectedOption] = useState("Free designs");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const options = [
    "Free designs",
    "License",
    "Articles",
    "Contributors",
    "About",
  ];

  //function to handel the clicked option
  const selectOption = (option) => {
    setSelectedOption(option);
    setIsDropDownOpen(false); // the menu closes after choosing an option
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-header">
          <span className="day-counter">Day 1384</span>
        </div>
        <h1 className="hero-title">Free UI resources for everyone</h1>
        <p className="hero-subtitle">
          The largest database of 100% free UI components and designs
          <br />
          available in the formats popular by UI designers.
        </p>

        <div className="search-container">
          <div className="unified-search-bar">
            <div
              className="dropdown-section"
              onClick={() => setIsDropDownOpen(!isDropDownOpen)}
            >
              <span>{selectedOption}</span>
              <i
                className={`fas fa-chevron-down ${
                  isDropDownOpen ? "rotate" : ""
                }`}
              ></i>
              {isDropDownOpen && (
                <div className="dropdown-menu">
                  {options.map((option) => (
                    <div
                      key={option}
                      className={`dropdown-item ${
                        selectedOption === option ? "active" : ""
                      }`}
                      onClick={() => selectOption(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="search-section">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="#A0A0AB" strokeWidth="2"/>
                <path d="m21 21-4.35-4.35" stroke="#A0A0AB" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroCom;
