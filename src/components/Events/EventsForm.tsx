import { useState } from "react"

type EventsFormProps = {
  handleSubmit: Function
}

const EventsForm = ( {handleSubmit}: EventsFormProps ) => {
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [link, setLink] = useState("");

  const submitForm = (event: any) => {
    event.preventDefault()
    
    handleSubmit(
      {
      name,
      location,
      description,
      link,
      date: new Date('Dec 17, 1999 03:00:00')
    })
  }
  
  return (
    <div>
      <h1>Events Form</h1>
      <form onSubmit={(e:any) => submitForm(e)}>
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