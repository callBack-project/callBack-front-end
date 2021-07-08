import { useState } from "react"

type JobsFormProps = {
  handleSubmit: Function
}

const JobsForm = ( {handleSubmit}: JobsFormProps ) => {
  const [position, setPosition] = useState("")
  const [company, setCompany] = useState("")
  const [isActive, setisActive] = useState("")
  const [link, setLink] = useState("");
  const [level, setLevel] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [remote, setRemote] = useState("");
  const [likes, setLikes] = useState("");

  const submitForm = (job: any) => {
    job.preventDefault()

    handleSubmit(
      {
      position,
      location,
      company,
      link,
      isActive: true,
      level,
      remote: true,
      likes
    })
  }

  return (
    <div>
      <h1>Jobs Form</h1>
      <form onSubmit={(e:any) => submitForm(e)}>
        <label>
          Position:
          <input onChange={(e : any) => setPosition(e.target.value)} type="text" value={position}/>
        </label>
        <label>
          Location:
          <input onChange={(e: any) => setLocation(e.target.value)} type="text" value={location}/>
        </label>
        <label>
          Company:
          <input onChange={(e: any) => setCompany(e.target.value)} type="text" value={company}/>
        </label>
        <label>
          Description:
          <input onChange={(e: any) => setDescription(e.target.value)} type="text" value={description}/>
        </label>
        <label>
          Link:
          <input onChange={(e: any) => setLink(e.target.value)} type="text" value={link}/>
        </label>
        <label>
          Likes:
          <input onChange={(e: any) => setLikes(e.target.value)} type="text" value={likes}/>
        </label>
        <label>
          Level:
          <input onChange={(e: any) => setLevel(e.target.value)} type="text" value={level}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </div>

  )
}

export default JobsForm