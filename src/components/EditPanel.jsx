import { useState } from "react";

const data = [
  {
    category: "Personal Details",
    fields: [
      {label: "Full Name ", type: "text", id: "name"},
      {label: "Email ", type: "email", id: "email"},
      {label: "Phone Number ", type: "text", id: "tel"},
    ]
  },

  {
    category: "About Me",
    fields: [
      {label: "Description ", type: "textarea", id: "description"},
    ]
  },

  {
    category: "Education",
    fields: [
      {label: "School Name", type: "text", id: "school-name"},
      {label: "Course", type: "text", id: "course"},
      {label: "Highest Qualification", type: "text", id: "qualification"},
    ]
  },

  {
    category: "Experience",
    fields: [
      {label: "Previous Experience", type: "textarea", id: "experience"},
      {label: "Date from", type: "text", id: "date-from"},
      {label: "Date until", type: "text", id: "date-until"}
    ]
  },

  {
    category: "Skills",
    fields: [
      {label: "Skills (seperate with comma)", type: "text", id: "skills"}
    ]
  }
];

function DropdownItem({ category, fields = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="dropdown-btn" onClick={handleOpen}>
        <div className="category">{category}</div>
        <div>▼</div>
      </button>
      <div className={`menu-wrapper ${isOpen ? "is-open" : "is-closed"}`}>
        <div className="menu">
          {fields.map(field => (
            <div key={field.id} className="field-item">
              <label htmlFor={field.id}>{field.label}</label>
              {
                (field.type === "textarea") ? 
                <textarea id={field.id} autoComplete="false" rows={10}></textarea> :
                <input type={field.type} id={field.id} autoComplete="false"></input>
              }
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default function EditPanel() {
  return (
    <div className="edit-panel">
      <h1 className="edit-panel-title">CV Builder</h1>
      {data.map(item => (
        <DropdownItem category={item.category} fields={item.fields} key={item.category} />
      ))}
    </div>
  )
}