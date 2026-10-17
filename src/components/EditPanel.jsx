import { useState } from "react";

export default function EditPanel() {
  const data = [
    {
      category: "About Me",
      fields: [
        {label: "Name: ", type: "text", id: "name"},
        {label: "Email: ", type: "email", id: "email"},
        {label: "Phone: ", type: "tel", id: "tel"}
      ]
    },
  ]

  return (
    <div className="edit-panel">
      <h1 className="edit-panel-title">CV Builder</h1>
      {data.map(item => (
        <DropdownItem category={item.category} fields={item.fields} key={item.category} />
      ))}
    </div>
  )
}

function DropdownItem({ category, fields = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="dropdown-btn" onClick={handleOpen}>
        <div>{category}</div>
        <div>▼</div>
      </button>
      <div className={`menu-wrapper ${isOpen ? "is-open" : "is-closed"}`}>
        <div className="menu">
          {fields.map(field => (
            <div key={field.id} className="field-item">
              <label htmlFor={field.id}>{field.label}</label>
              <input type={field.type} id={field.id} autoComplete="false"></input>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}