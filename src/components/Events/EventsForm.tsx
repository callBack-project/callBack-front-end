import { useState, useEffect } from "react"

const EventsForm = () => {
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [link, setLink] = useState("");
  
  return (
    <div>
      <h1>Events Form</h1>
      <form>
        <label>
          Event Name:
          <input onChange={(e : any) => setName(e.target.value)} type="text" value={name}/>
        </label>
        <label>
          Location:
          <input onChange={(e: any) => setLocation(e.target.value)} type="text" value={location}/>
        </label>
        <label>
          Description:
          <input onChange={(e: any) => setDescription(e.target.value)} type="text" value={description}/>
        </label>
        <label>
          Link:
          <input onChange={(e: any) => setLink(e.target.value)} type="text" value={link}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </div>
    
  )
}

export default EventsForm