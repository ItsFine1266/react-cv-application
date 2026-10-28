export default function PreviewPanel({ name, email, phone }) {  
  return (
    <div className="preview-panel">
      <h1>{name || <br />}</h1>
      <ul>
        <li className={email.length > 0 ? "email-display" : "email-hidden"}><h3>{email || <br />}</h3></li>
        <li className={phone.length > 0 ? "phone-display" : "phone-hidden"}><h3>{phone || <br />}</h3></li>
      </ul>
    </div>
  )
}