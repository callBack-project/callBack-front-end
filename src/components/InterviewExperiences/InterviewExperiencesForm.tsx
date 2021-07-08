import { useState } from "react"

type InterviewExperienceFormProps = {
  handleSubmit: Function
}

const InterviewExperienceForm = ( {handleSubmit}: InterviewExperienceFormProps ) => {
  const [position, setPosition] = useState("")
  const [company, setCompany] = useState("")
  const [info, setInfo] = useState("")
  const [offer, setOffer] = useState("");
  const [rounds, setRounds] = useState("");
  const [likes, setLikes] = useState("");


  const submitForm = (interviewExperience: any) => {
    interviewExperience.preventDefault()

    handleSubmit(
      {
        position,
        company,
        info,
        offer,
        interviewDate: new Date('Dec 17, 1999 03:00:00'),
        rounds,
        likes
      })
  }

  return (
    <div>
      <h1>Interview Experience Form</h1>
      <form onSubmit={(e:any) => submitForm(e)}>
        <label>
          Position:
          <input onChange={(e : any) => setPosition(e.target.value)} type="text" value={position}/>
        </label>
        <label>
          Company:
          <input onChange={(e: any) => setCompany(e.target.value)} type="text" value={company}/>
        </label>
        <label>
          Info:
          <input onChange={(e: any) => setInfo(e.target.value)} type="text" value={info}/>
        </label>
        <label>
          Offer:
          <input onChange={(e: any) => setOffer(e.target.value)} type="text" value={offer}/>
        </label>
        <label>
          Rounds:
          <input onChange={(e: any) => setRounds(e.target.value)} type="text" value={rounds}/>
        </label>
        <label>
          Likes:
          <input onChange={(e: any) => setLikes(e.target.value)} type="text" value={likes}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default InterviewExperienceForm