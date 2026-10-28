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

  return (
    <div className="container">
      <EditPanel
        name={name} onNameChange={setName} 
        email={email} onEmailChange={setEmail}
        phone={phone} onPhoneChange={setPhone}
      >
      </EditPanel>

      <PreviewPanel name={name} email={email} phone={phone}></PreviewPanel>
    </div>
  )
}