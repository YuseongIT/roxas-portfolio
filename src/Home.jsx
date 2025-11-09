import { useState } from "react";
import "./Home.css";

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);
  const closeSection = () => setActiveSection(null);
  const openSection = (section) => setActiveSection(section);
const [showHobbies, setShowHobbies] = useState(false);
const [showLanguages, setShowLanguages] = useState(false);
const [showClass, setShowClass] = useState(false);
const [showCharacterSheet, setShowCharacterSheet] = useState(false);


  return (
    <div className="home-container">
      <header className={`home-header ${activeSection ? "blurred" : ""}`}>
        <button className="nav-btn" onClick={() => openSection("aboutme")}>About Me</button>
        <button className="nav-btn" onClick={() => openSection("education")}>Education</button>
        <button className="nav-btn" onClick={() => openSection("skills")}>Skills</button>
        <button className="nav-btn" onClick={() => openSection("projects")}>Projects</button>
        <button className="nav-btn" onClick={() => openSection("contact")}>Contact</button>
      </header>

      <main
        className={`map-area ${activeSection ? "dimmed" : ""}`}
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Home/map.jpg)` }}
      >
        <div className="map-buttons">
          {["aboutme", "education", "skills", "projects", "contact"].map((section) => (
            <div key={section} className={`map-btn ${section}`} onClick={() => openSection(section)}>
              <img src={`${process.env.PUBLIC_URL}/Home/buttons/${section}.png`} alt={`${section}`} className="btn-img base-img" />
              <img src={`${process.env.PUBLIC_URL}/Home/buttons/${section}-hover.png`} alt={`${section} hover`} className="btn-img hover-img" />
              <img src={`${process.env.PUBLIC_URL}/Home/labels/${section}.png`} alt={`${section} label`} className="label-img" />
            </div>
          ))}
        </div>
      </main>

   {activeSection === "aboutme" && (
  <>
    <div className="sidebar left fixed">
      <button className="close-btn" onClick={closeSection}>✕</button>
      <div className="sidebar-content">

        {/* Label */}
        <img
          src={`${process.env.PUBLIC_URL}/Home/labels/aboutme.png`}
          alt="About Me"
          className="modal-label"
        />

        {/* Profile Image */}
        <div className="about-image-container">
          <img
            src={`${process.env.PUBLIC_URL}/Home/ivan.png`} 
            alt="Ivan"
            className="about-image"
          />
        </div>

        {/* Parchment Info */}
        <div className="parchment-container">
          <img
            src={`${process.env.PUBLIC_URL}/Home/parchment.png`}
            alt="Parchment"
            className="parchment-bg"
          />
        </div>

        {/* Character Sheet Button */}
        <button
          className="character-sheet-btn"
          onClick={() => setShowCharacterSheet(true)}
        >
          My Character Sheet
        </button>

        {/* About Me Text */}
        <div className="about-text">
          <p>
            Hello! I’m Ivan, a 3rd-year BSIT student at T.I.P. Manila with a strong interest in
            technology, creativity, and how innovation can shape a better world. I chose this
            program because I’ve always been fascinated by how technology connects people and
            ideas, and I want to be part of that ongoing evolution.
          </p>
          <p>
            I live in Taguig City, and outside of academics, I’m someone who values exploration,
            both in the real world and in the things I learn. One of my goals in life is to travel,
            experience different cultures, and continue my family’s tradition of curiosity and
            adventure. My favorite games are <em>Hollow Knight</em> and <em>The Witcher 3</em>.
            Favorite movies? I rewatch the entire <em>Lord of the Rings</em> trilogy every December!
          </p>
        </div>

        <p className="favorite-class"><strong>"Why change the past when you can own this day?"</strong></p>

        {/* Favorite Languages (toggle) */}
        <button className="toggle-btn" onClick={() => setShowLanguages(!showLanguages)}>
          {showLanguages ? "Favorite Languages" : "Favorite Languages"}
        </button>
        {showLanguages && (
          <ul className="hobbies-list">
            <li>Java</li>
            <li>Python</li>
          </ul>
        )}

        {/* Hobbies & Interests (toggle) */}
        <button className="toggle-btn" onClick={() => setShowHobbies(!showHobbies)}>
          {showHobbies ? "Hobbies & Interests" : "Hobbies & Interests"}
        </button>
        {showHobbies && (
          <ul className="hobbies-list">
            <li>Gaming (RPGs, Roguelikes, Fantasy)</li>
            <li>Coding</li>
            <li>Writing (Worldbuilding)</li>
            <li>Dungeons & Dragons </li>
          </ul>
        )}
      </div>
    </div>

    {/* Character Sheet Popup */}
    {showCharacterSheet && (
      <div className="character-sheet">
        <button className="close-btn" onClick={() => setShowCharacterSheet(false)}>✕</button>
        <div className="character-sheet-content">
          <div className="character-header">
            <img
              src={`${process.env.PUBLIC_URL}/Home/ivan.png`}
              alt="Ivan Portrait"
              className="character-photo"
            />
            <div className="character-info">
              <h2>John Ivan S. Roxas</h2>
              <p>20 • Sagittarius • INFP</p>
              <p>BSIT Student – T.I.P. Manila</p>
            </div>
          </div>

          <div className="character-stats">
            <div>STR: 10</div>
            <div>DEX: 12</div>
            <div>CON: 11</div>
            <div>INT: 16</div>
            <div>WIS: 14</div>
            <div>CHA: 13</div>
          </div>

          <div className="character-inventory">
            <h3>Skills & Traits</h3>
            <ul>
              <li>Ungodly Determination</li>
              <li>Cramming Expert</li>
              <li>Will break down for 30 minutes before continuing a project.</li>
            </ul>
          </div>
          <br></br>
          <div className="character-inventory">
            <h3>Inventory:</h3>
            <ul>
              <li>An apple</li>
              <li>His laptop</li>
                  <li>Janna's SD Card</li>
              <li>Student BEEP Card</li>
              <li>JPEG's Liquidation Reports</li>
              <li>Bishop, the orange cat</li>
            </ul>
          </div>
        </div>
      </div>
    )}
  </>
)}



 {activeSection === "education" && (
  <div className="modal wide fixed education-modal">
    <button className="close-btn" onClick={closeSection}>✕</button>

    <div className="education-scroll">
      <img
        src={`${process.env.PUBLIC_URL}/Home/labels/education.png`}
        alt="Education"
        className="modal-label"
      />

      <div className="education-section">
        <div className="education-image-container">
          <img
            src="/Home/tip.png"
            alt="Academy Emblem"
            className="education-image"
          />
        </div>

        <h2 className="education-title">The Technological Insitute of the Philippines</h2>
        <p className="education-text">
          My campaign is set in the T.I.P - Manila, where I study the arcane arts of software development and programming under the BS in Information Technology program. This school is a bastion of knowledge where ambitious students like myself forge their craft in the heart of the city. I'm on my 3rd year and we are currently learning about the implementation of Laravel and React. It has been a difficult but rewarding journey so far and I hope to acquire new knowledge before I exit the halls of this institution.
        </p>
      </div>
    </div>
  </div>
)}


      {activeSection === "skills" && (
        <div className="modal extra-wide fixed">
          <button className="close-btn" onClick={closeSection}>✕</button>
          <div className="modal-content skills-modal">
            <img src={`${process.env.PUBLIC_URL}/Home/labels/skills.png`} alt="Skills" className="modal-label" />
            <div className="skills-section">
              <div className="section-image">
                <img src={`${process.env.PUBLIC_URL}/Home/skills/skills1.png`} alt="Design Crest" />
              </div>
              <h2 className="skills-title">WebDesign</h2>
              <div className="skills-grid">
                {["HTML", "CSS", "React"].map((skill) => (
                  <div key={skill} className="skill-card">{skill}</div>
                ))}
              </div>
            </div>
            <div className="skills-section">
              <div className="section-image">
                <img src={`${process.env.PUBLIC_URL}/Home/skills/skills2.png`} alt="Arcane Crest" />
              </div>
              <h2 className="skills-title">Programming Languages</h2>
              <div className="skills-grid">
                {["C++", "Java", "Python", "Kotlin"].map((skill) => (
                  <div key={skill} className="skill-card">{skill}</div>
                ))}
              </div>
            </div>
            <div className="skills-section">
              <div className="section-image">
                <img src={`${process.env.PUBLIC_URL}/Home/skills/skills3.png`} alt="Framework Crest" />
              </div>
              <h2 className="skills-title">Frameworks</h2>
              <div className="skills-grid">
                {["Laravel", "Node.js", "PHP", "SQL"].map((skill) => (
                  <div key={skill} className="skill-card">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === "projects" && (
        <div className="modal smaller fixed transparent">
          <button className="close-btn" onClick={closeSection}>✕</button>
          <div className="modal-content project-modal">
            <img src={`${process.env.PUBLIC_URL}/Home/labels/projects.png`} alt="Projects" className="modal-label" />
            <div className="projects-grid">
              {[
                {
                  icon: `${process.env.PUBLIC_URL}/Home/icons/project1.png`,
                  title: "The Journey",
                  desc: "An informative group project that served as my introduction to web design.",
                  link: "https://github.com/YuseongIT/TheJourney-Group5"
                },
                {
                  icon: `${process.env.PUBLIC_URL}/Home/icons/project2.png`,
                  title: "CheckMatev3",
                  desc: "Having trouble taking notes for school? This humble little application is for you!",
                  link: "https://drive.google.com/drive/folders/1O0cqUD-GrCBS9waKRNn91UF0WxxPRJBQ?usp=sharing"
                },
                {
                  icon: `${process.env.PUBLIC_URL}/Home/icons/project3.png`,
                  title: "QuizDeck",
                  desc: "An intuitive quiz creation website for teachers, students, and friends!",
                  link: "https://drive.google.com/drive/folders/1nq7_TzH8uExYHI9t4k7Bi48xGHeqhlIO?usp=sharing"
                }
              ].map((proj, i) => (
                <div key={i} className="project-card">
                  <img src={proj.icon} alt={proj.title} className="project-icon" />
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-btn">View Project</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === "contact" && (
        <div className="sidebar right fixed">
          <button className="close-btn" onClick={closeSection}>✕</button>
          <div className="sidebar-content">
            <img src={`${process.env.PUBLIC_URL}/Home/labels/contact.png`} alt="Contact Label" className="modal-label" />
            <div className="contact-intro">
              <p>Should your quest demand my collaboration, send me a message.</p>
              <div className="contact-grid">
                {[
                  { icon: "gmail.png", label: "Gmail", link: "mailto:akosiivan2004@gmail.com" },
                  { icon: "facebook.png", label: "Facebook", link: "https://www.facebook.com/IvanRoxas2004" },
                  { icon: "linkedin.png", label: "LinkedIn", link: "https://www.linkedin.com/in/john-ivan-s-roxas-b4b85a38b/" },
                  { icon: "github.png", label: "GitHub", link: "https://github.com/YuseongIT" }
                ].map((portal, i) => (
                  <a key={i} className="portal" href={portal.link} target="_blank" rel="noopener noreferrer">
                    <div className="rune-ring gold">
                      <img src={`${process.env.PUBLIC_URL}/Home/icons/${portal.icon}`} alt={portal.label} className="portal-icon" />
                    </div>
                    <span className="portal-label">{portal.label}</span>
                  </a>
                ))}
              </div>
              <p className="contact-epitaph">“Foul tarnished, in search of the Elden Code!”</p>
            </div>
          </div>
        </div>
      )}

      <footer className="footer-banner">
        <span className="footer-left">John Ivan S. Roxas | IT31S2</span>
      </footer>
    </div>
  );
}
