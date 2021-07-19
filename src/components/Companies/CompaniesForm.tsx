import { useState} from "react"

type CompaniesFormProps = {
  handleSubmit: Function
}

const CompaniesForm = ({handleSubmit}: CompaniesFormProps ) => {
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [size, setSize] = useState("");
  const [industry, setIndustry] = useState("");

  const submitForm = (event: any) => {
    event.preventDefault()

    handleSubmit(
      {
      name,
      location,
      industry,
      description,
      size,
      
    })
  }

  return (
    <div data-testid='companiesForm'>
      <h1>Companies Form</h1>
      <form onSubmit={(e:any) => submitForm(e)}>
        <label>
          Company Name:
          <input onChange={(e : any) => setName(e.target.value)} type="text" value={name}/>
        </label>
        <label>
          Location:
          <input onChange={(e: any) => setLocation(e.target.value)} type="text" value={location}/>
        </label>
        <label>
          Industry:
          <input onChange={(e: any) => setIndustry(e.target.value)} type="text" value={industry}/>
        </label>
        <label>
          Description:
          <input onChange={(e: any) => setDescription(e.target.value)} type="text" value={description}/>
        </label>
        <label>
          size:
          <input onChange={(e: any) => setSize(e.target.value)} type="text" value={size}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </div>

  )
}

export default CompaniesForm
