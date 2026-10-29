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

function AboutMe({ description, onDescriptionChange }) {
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
            <textarea id="description" autoComplete="false" rows={10} value={description} onChange={(e) => onDescriptionChange(e.target.value)}></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

function Education({ school, onSchoolChange, course, onCourseChange, qualification, onQualificationChange }) {
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
            <input type="text" id="school-name" autoComplete="false" value={school} onChange={(e) => onSchoolChange(e.target.value)} />
            <label htmlFor="course">Course </label>
            <input type="text" id="course" autoComplete="false" value={course} onChange={(e) => onCourseChange(e.target.value)} />
            <label htmlFor="qualification">Highest Qualification</label>
            <input type="text" id="qualification" autoComplete="false" value={qualification} onChange={(e) => onQualificationChange(e.target.value)}/>
          </div>
        </div>
      </div>
    </div>
  )
}

function Experience({ experienceTitle, onExperienceTitleChange, dateFrom, onDateFromChange, dateUntil, onDateUntilChange, experienceDescription, onExperienceDescriptionChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={handleOpen}>
        <div className="category">Previous Experience</div>
        <div>▼</div>
      </button>
      <div className={`menu-wrapper ${isOpen ? "is-open" : "is-closed"}`}>
        <div className="menu">
          <div key="name" className="field-item">
            <label htmlFor="experience-title">Experience Title </label>
            <input type="text" id="experience-title" autoComplete="false" value={experienceTitle} onChange={(e) => onExperienceTitleChange(e.target.value)} />
            <label htmlFor="date-from">Date from</label>
            <input type="text" id="date-from" autoComplete="false" value={dateFrom} onChange={(e) => onDateFromChange(e.target.value)}/>
            <label htmlFor="date-until">Date until</label>
            <input type="text" autoComplete="false" id="date-until" value={dateUntil} onChange={(e) => onDateUntilChange(e.target.value)} />
            <label htmlFor="experience-description">Experience Description</label>
            <textarea autoComplete="false" id="experience-description" rows={10} value={experienceDescription} onChange={(e) => onExperienceDescriptionChange(e.target.value)}></textarea>
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

export default function EditPanel({ 
  name, onNameChange, email, onEmailChange, phone, onPhoneChange, 
  description, onDescriptionChange, 
  school, onSchoolChange, course, onCourseChange, qualification, onQualificationChange, 
  experienceTitle, onExperienceTitleChange, dateFrom, onDateFromChange, dateUntil, onDateUntilChange, experienceDescription, onExperienceDescriptionChange 
}) {
  return (
    <div className="edit-panel">
      <h1 className="edit-panel-title">CV Builder</h1>
      <PersonalDetails
        name={name} onNameChange={onNameChange} 
        email={email} onEmailChange={onEmailChange} 
        phone={phone} onPhoneChange={onPhoneChange}
      ></PersonalDetails>

      <AboutMe
        description={description} onDescriptionChange={onDescriptionChange}
      ></AboutMe>

      <Education
        school={school} onSchoolChange={onSchoolChange} 
        course={course} onCourseChange={onCourseChange} 
        qualification={qualification} onQualificationChange={onQualificationChange} 
      ></Education>
      
      <Experience
        experienceTitle={experienceTitle} onExperienceTitleChange={onExperienceTitleChange} 
        dateFrom={dateFrom} onDateFromChange={onDateFromChange} 
        dateUntil={dateUntil} onDateUntilChange={onDateUntilChange} 
        experienceDescription={experienceDescription} onExperienceDescriptionChange={onDescriptionChange} 
      ></Experience>

      <Skills />
    </div>
  )
}