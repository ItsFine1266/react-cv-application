import "../styles/main.css"
import "../styles/EditPanel.css"
import "../styles/PreviewPanel.css"

import EditPanel from './EditPanel'
import PreviewPanel from './PreviewPanel'
import { useState } from "react"

export default function App() {
  const [name, setName] = useState("Bob Smith");
  const [email, setEmail] = useState("BobSmith6831@example.com");
  const [phone, setPhone] = useState("07123456789");
  const [description, setDescription] = useState("I want to work because I love the idea of employment so much it just fascinates me all day and night. So much so that I cannot sleep because I love work that much and cannot bear a thought without work. I love work I love work so much.");
  const [school, setSchool] = useState("University of Deez Nutz");
  const [course, setCourse] = useState("Computer Science BCa");
  const [qualification, setQualification] = useState("Bachelor degree cos i bachelor");
  const [experienceTitle, setExperienceTitle] = useState("Software Engineer at local bank");
  const [dateFrom, setDateFrom] = useState("September 2nd 2021");
  const [dateUntil, setDateUntil] = useState("June 24th 2026");
  const [experienceDescription, setExperienceDescription] = useState("I was lead software engineer but got laid off cos I was apparently too good at my job and they needed someone less skilled. I made the core systems from scratch and made the bank profit over six figures, none of which was given to me. w scam");

  return (
    <div className="container">
      <EditPanel
        name={name} onNameChange={setName}
        email={email} onEmailChange={setEmail}
        phone={phone} onPhoneChange={setPhone}
        description={description} onDescriptionChange={setDescription}
        school={school} onSchoolChange={setSchool}
        course={course} onCourseChange={setCourse}
        qualification={qualification} onQualificationChange={setQualification}
        experienceTitle={experienceTitle} onExperienceTitleChange={setExperienceTitle}
        dateFrom={dateFrom} onDateFromChange={setDateFrom}
        dateUntil={dateUntil} onDateUntilChange={setDateUntil}
        experienceDescription={experienceDescription} onExperienceDescriptionChange={setExperienceDescription}
      >
      </EditPanel>

      <PreviewPanel 
        name={name} email={email} phone={phone} 
        description={description}
        school={school} course={course} qualification={qualification}
        experienceTitle={experienceTitle} dateFrom={dateFrom} dateUntil={dateUntil} experienceDescription={experienceDescription}
      >
      </PreviewPanel>
    </div>
  )
}