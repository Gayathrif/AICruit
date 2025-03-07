import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"; // Check stored theme
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <div className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}>
        <h1>AICruit</h1>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>

        <h2>Find Your Dream Job with AI</h2>
        <p>AI-powered recruitment for a smarter hiring process</p>

        <div className="logo-container">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <div className="card">
          <h3>Latest Jobs</h3>
          <div className="job">
            <strong>Software Engineer</strong>
            <p>Google - Remote</p>
            <button className="apply-btn">Apply Now</button>
          </div>
          <div className="job">
            <strong>Data Scientist</strong>
            <p>Microsoft - Bangalore</p>
            <button className="apply-btn">Apply Now</button>
          </div>
        </div>

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
