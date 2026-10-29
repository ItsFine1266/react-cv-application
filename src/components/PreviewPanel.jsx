export default function PreviewPanel({ 
  name, email, phone, 
  description, 
  school, course, qualification, 
  experienceTitle, dateFrom, dateUntil, experienceDescription,
  skills
}) {
  return (
    <div className="preview-panel">
      <h1>{name || <br />}</h1>
      <ul>
        <li className={email.length > 0 ? "email-display" : "email-hidden"}><h3>{email}</h3></li>
        <li className={phone.length > 0 ? "phone-display" : "phone-hidden"}><h3>{phone}</h3></li>
      </ul>

      {
        description.length !== 0 ? 
          <>
            <h3 className="subheading">About Me</h3>
            <p>{description}</p>
          </>
        : ""
      }

      {
        (school.length !== 0 || course.length !== 0 || qualification !== qualification) ? 
          <>
            <h3 className="subheading">Education</h3>
            <p>{school}</p>
            <p>{course}</p>
            <p>{qualification}</p>
          </>
        : ""
      }

      {
        (experienceTitle.length !== 0 || dateFrom.length !== 0 || 
          dateUntil.length !== 0 || experienceDescription.length !== 0) ?
          <>
            <h3 className="subheading">Previous Experience</h3>
            <p>{experienceTitle}</p>
            <p>{dateFrom} - {dateUntil}</p>
            <p className="description">{experienceDescription}</p>
          </>
        : ""
      }

      <div className="skills">{displaySkills(skills)}</div>
    </div>
  )
}

function displaySkills(skills) {
  let skillsArr = [];

  const splitSkills = skills.trim().split(",");
  splitSkills.forEach(skill => {
    skillsArr.push(<Skill text={skill} key={skill}></Skill>);
  });

  return skillsArr;
}

function Skill({ text }) {
  return <div className="skill">{text}</div>
}