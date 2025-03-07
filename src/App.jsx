import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const jobListings = [
  { id: 1, title: "Software Engineer", company: "Google", location: "Remote", category: "Engineering" },
  { id: 2, title: "Data Scientist", company: "Microsoft", location: "Bangalore", category: "Data Science" },
  { id: 3, title: "Product Manager", company: "Amazon", location: "Hyderabad", category: "Management" },
  { id: 4, title: "UI/UX Designer", company: "Adobe", location: "Remote", category: "Design" },
];

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [savedJobs, setSavedJobs] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleSaveJob = (job) => {
    setSavedJobs((prevJobs) =>
      prevJobs.includes(job.id) ? prevJobs.filter((id) => id !== job.id) : [...prevJobs, job.id]
    );
  };

  const filteredJobs = category === "All" ? jobListings : jobListings.filter((job) => job.category === category);

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

        {/* Job Filter Dropdown */}
        <select className="filter-dropdown" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Jobs</option>
          <option value="Engineering">Engineering</option>
          <option value="Data Science">Data Science</option>
          <option value="Management">Management</option>
          <option value="Design">Design</option>
        </select>

        {/* Job Listings */}
        <div className="card">
          <h3>Latest Jobs</h3>
          {filteredJobs.map((job) => (
            <div key={job.id} className="job">
              <strong>{job.title}</strong>
              <p>{job.company} - {job.location}</p>
              <button className="apply-btn">Apply Now</button>
              <button className="save-btn" onClick={() => toggleSaveJob(job)}>
                {savedJobs.includes(job.id) ? "Unsave" : "Save"}
              </button>
            </div>
          ))}
        </div>

        {/* Saved Jobs */}
        {savedJobs.length > 0 && (
          <div className="card saved-jobs">
            <h3>Saved Jobs</h3>
            {jobListings
              .filter((job) => savedJobs.includes(job.id))
              .map((job) => (
                <div key={job.id} className="job">
                  <strong>{job.title}</strong>
                  <p>{job.company} - {job.location}</p>
                  <button className="apply-btn">Apply Now</button>
                </div>
              ))}
          </div>
        )}

        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </div>
    </>
  );
}

export default App;
