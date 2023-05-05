import Form from "../Form/Form"
import { useState } from "react"

const Login = () => {
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  
  const addUser = (event) => {
      event.preventDefault()
      setNewEmail('')
      setNewPassword('')
  }
  
const handleEmailChange = (event) => {
  setNewEmail(event.target.value)
}

const handlePasswordChange = (event) => {
  setNewPassword(event.target.value)
}

return (
    <main>
      <Form
        title="login"
        addPerson={addUser}
        newEmail={newEmail}
        addEmail={handleEmailChange}
        newPassword={newPassword}
        addPassword={handlePasswordChange} />
    </main>
  )
}

export default Login