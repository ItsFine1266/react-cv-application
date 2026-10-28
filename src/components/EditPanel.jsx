import { useState } from "react";

function PersonalDetails({ name, onNameChange, email, onEmailChange, phone, onPhoneChange }) {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={handleOpen}>
        <div className="category">Personal Details</div>
        <div>▼</div>
      </button>
      <div className={`menu-wrapper ${isOpen ? "is-open" : "is-closed"}`}>
        <div className="menu">
          <div key="name" className="field-item">
            <label htmlFor="name">Full Name </label>
            <input type="text" id="name" autoComplete="false" value={name} onChange={(e) => onNameChange(e.target.value)}/>
            <label htmlFor="email">Email </label>
            <input type="email" id="email" autoComplete="false" value={email} onChange={(e) => onEmailChange(e.target.value)}/>
            <label htmlFor="tel">Phone Number</label>
            <input type="text" id="tel" autoComplete="false" value={phone} onChange={(e) => onPhoneChange(e.target.value)}/>
          </div>
        </div>
      </div>
    </div>
  )
}

function AboutMe() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={handleOpen}>
        <div className="category">About Me</div>
        <div>▼</div>
      </button>
      <div className={`menu-wrapper ${isOpen ? "is-open" : "is-closed"}`}>
        <div className="menu">
          <div key="description" className="field-item">
            <label htmlFor="description">Description </label>
            <textarea id="name" autoComplete="false" rows={10}></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

function Education() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={handleOpen}>
        <div className="category">Education</div>
        <div>▼</div>
      </button>
      <div className={`menu-wrapper ${isOpen ? "is-open" : "is-closed"}`}>
        <div className="menu">
          <div key="school-name" className="field-item">
            <label htmlFor="school-name">School Name </label>
            <input type="text" id="school-name" autoComplete="false" />
            <label htmlFor="course">Course </label>
            <input type="text" id="course" autoComplete="false" />
            <label htmlFor="qualification">Highest Qualification</label>
            <input type="text" id="qualification" autoComplete="false"/>
          </div>
        </div>
      </div>
    </div>
  )
}

function Experience() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={handleOpen}>
        <div className="category">Experience</div>
        <div>▼</div>
      </button>
      <div className={`menu-wrapper ${isOpen ? "is-open" : "is-closed"}`}>
        <div className="menu">
          <div key="name" className="field-item">
            <label htmlFor="experience-title">Previous Experience Title </label>
            <input type="text" id="experience-title" autoComplete="false" />
            <label htmlFor="date-from">Date from</label>
            <input type="text" id="date-from" autoComplete="false"/>
            <label htmlFor="date-until">Date until</label>
            <input type="text" autoComplete="false" id="date-until" />
            <label htmlFor="previous-experience">Previous Experience Description</label>
            <textarea autoComplete="false" id="previous-experience" rows={10}></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

function Skills() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={handleOpen}>
        <div className="category">Skills</div>
        <div>▼</div>
      </button>
      <div className={`menu-wrapper ${isOpen ? "is-open" : "is-closed"}`}>
        <div className="menu">
          <div key="name" className="field-item">
            <label htmlFor="skills">Skills (seperate with comma) </label>
            <input type="text" id="skills" autoComplete="false" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EditPanel({ name, onNameChange, email, onEmailChange, phone, onPhoneChange }) {
  return (
    <div className="edit-panel">
      <h1 className="edit-panel-title">CV Builder</h1>
      <PersonalDetails name={name} onNameChange={onNameChange} email={email} onEmailChange={onEmailChange} phone={phone} onPhoneChange={onPhoneChange} />
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
    </div>
  )
}