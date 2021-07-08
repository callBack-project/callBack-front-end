import { useState } from "react"

type UsersFormProps = {
  handleSubmit: Function
}

const UsersForm = ( {handleSubmit}: UsersFormProps ) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState("");
  const [picture, setPicture] = useState("");



  const submitForm = (user: any) => {
    user.preventDefault()

    handleSubmit(
      {
        firstName,
        lastName,
        userName,
        password,
        company,
        bio,
        skills,
        picture
    })
  }

  return (
    <div>
      <h1>Users Form</h1>
      <form onSubmit={(e:any) => submitForm(e)}>
        <label>
          First Name:
          <input onChange={(e : any) => setFirstName(e.target.value)} type="text" value={firstName}/>
        </label>
        <label>
          Last Name:
          <input onChange={(e: any) => setLastName(e.target.value)} type="text" value={lastName}/>
        </label>
        <label>
          Username:
          <input onChange={(e: any) => setUsername(e.target.value)} type="text" value={userName}/>
        </label>
        <label>
          Password:
          <input onChange={(e: any) => setPassword(e.target.value)} type="text" value={password}/>
        </label>
        <label>
          Company:
          <input onChange={(e: any) => setCompany(e.target.value)} type="text" value={company}/>
        </label>
        <label>
          Bio:
          <input onChange={(e: any) => setBio(e.target.value)} type="text" value={bio}/>
        </label>
        <label>
          Skills:
          <input onChange={(e: any) => setSkills(e.target.value)} type="text" value={skills}/>
        </label>
        <label>
          Picture:
          <input onChange={(e: any) => setPicture(e.target.value)} type="text" value={picture}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </div>

  )
}

export default UsersForm