import React, { useState } from "react";
import "../index.css";
import figmaIcon from "../assets/figma.png";
import sketchIcon from "../assets/sketch.png";
import invisionIcon from "../assets/invision-logo.png";
import xdIcon from "../assets/adobe-xd.png";
import photoshopIcon from "../assets/Ps.png";


const IconsBar = () => {
  const [activeToggle, setActiveToggle] = useState("Latest");
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeIcon, setActiveIcon] = useState("Sketch");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); //the following state is used to handle the frop down menu to make the design more elegent

  return (
    <div className="icon-bar">
      <div className="toggle-section">
        <button
          className={`toggle-btn ${activeToggle === "Latest" ? "active" : ""}`}
          onClick={() => setActiveToggle("Latest")}
        >
          Latest
        </button>
        <button
          className={`toggle-btn ${activeToggle === "Popular" ? "active" : ""}`}
          onClick={() => setActiveToggle("Popular")}
        >
          Popular
        </button>
      </div>

      {/* Mobile dropdown button */}
      <button 
        className="mobile-filters-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        Filters & Tools
        <i className={`fas fa-chevron-down ${isMobileMenuOpen ? 'rotate' : ''}`}></i>
      </button>

  
      <div className="filter-tabs desktop-only">
        {["All", "Web", "Mobile", "UI Kit", "Coded"].map((filter) => (
          <button
            className={`filter-tab ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

    
      <div className="design-tools desktop-only">
        <div
          className={`tool-circle ${activeIcon === "Figma" ? "active" : ""}`}
          onClick={() => setActiveIcon("Figma")}
        >
          <img src={figmaIcon} alt="Figma" className="tool-image" />
        </div>
        <div
          className={`tool-circle ${activeIcon === "Sketch" ? "active" : ""}`}
          onClick={() => setActiveIcon("Sketch")}
        >
          <img src={sketchIcon} alt="Sketch" className="tool-image" />
        </div>
        <div
          className={`tool-circle ${activeIcon === "InVision" ? "active" : ""}`}
          onClick={() => setActiveIcon("InVision")}
        >
          <img src={invisionIcon} alt="InVision" className="tool-image" />
        </div>
        <div
          className={`tool-circle ${activeIcon === "XD" ? "active" : ""}`}
          onClick={() => setActiveIcon("XD")}
        >
          <img src={xdIcon} alt="Adobe XD" className="tool-image" />
        </div>
        <div
          className={`tool-circle ${
            activeIcon === "Photoshop" ? "active" : ""
          }`}
          onClick={() => setActiveIcon("Photoshop")}
        >
          <img src={photoshopIcon} alt="Photoshop" className="tool-image" />
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="mobile-dropdown">
          <div className="mobile-section">
            <h4>Filters</h4>
            <div className="filter-tabs mobile-filters">
              {["All", "Web", "Mobile", "UI Kit", "Coded"].map((filter) => (
                <button
                  key={filter}
                  className={`filter-tab ${activeFilter === filter ? "active" : ""}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="mobile-section">
            <h4>Design Tools</h4>
            <div className="design-tools mobile-tools">
              <div className={`tool-circle ${activeIcon === "Figma" ? "active" : ""}`} onClick={() => setActiveIcon("Figma")}>
                <img src={figmaIcon} alt="Figma" className="tool-image" />
              </div>
              <div className={`tool-circle ${activeIcon === "Sketch" ? "active" : ""}`} onClick={() => setActiveIcon("Sketch")}>
                <img src={sketchIcon} alt="Sketch" className="tool-image" />
              </div>
              <div className={`tool-circle ${activeIcon === "InVision" ? "active" : ""}`} onClick={() => setActiveIcon("InVision")}>
                <img src={invisionIcon} alt="InVision" className="tool-image" />
              </div>
              <div className={`tool-circle ${activeIcon === "XD" ? "active" : ""}`} onClick={() => setActiveIcon("XD")}>
                <img src={xdIcon} alt="Adobe XD" className="tool-image" />
              </div>
              <div className={`tool-circle ${activeIcon === "Photoshop" ? "active" : ""}`} onClick={() => setActiveIcon("Photoshop")}>
                <img src={photoshopIcon} alt="Photoshop" className="tool-image" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default IconsBar;
