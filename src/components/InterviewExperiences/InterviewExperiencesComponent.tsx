import { useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import InterviewExperienceForm from './InterviewExperiencesForm';
import { interviewExperienceDetailsReducer, ACTIONS, initialState } from './InterviewExperiencesReducer';

const InterviewExperiencesComponent = () => {
  const [state, dispatch] = useReducer(interviewExperienceDetailsReducer, initialState);
  const [searchTerm, setSearchTerm] = useState('');
  const { interviewExperienceDetails, interviewRepliesDetails, loading, error } = state;
  const [viewComments, setViewComments] = useState(false)
  const [interviewReplies, setInterviewReplies] = useState([])
  
  useEffect(() => {
    dispatch({ type: ACTIONS.GET_INTERVIEW_EXPERIENCES });
    const getInterviewExperiences = async () => {
      try {
        let response: any = await axios.get(
          'http://localhost:8080/api/interview-experiences'
        );
        // console.log(response.data);
        dispatch({ type: ACTIONS.SUCCESS, data: response.data });
        return;
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, error: error.message || error });
      }
    };
    getInterviewExperiences();
  }, []);

  const getAllInterviewRepliesHandleClick = (id: any) => {
    const viewRepliesHandleClick = async () => {
      console.log(id)
      setViewComments(true)
      try {
        let response: any = await axios.get(`http://localhost:8080/api/interview-experiences/replies/${id}`)
        dispatch({ type: ACTIONS.GET_INTERVIEW_REPLIES_BY_INT_ID, data: response.data })
        return;
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, error: error.message || error });
      }
    }
    viewRepliesHandleClick();
  }
  

  const postInterviewExperienceSubmitHandler = ( data: any) => {
    const postInterviewExperience = async () => {
      try {
        let response: any = await axios.post('http://localhost:8080/api/interview-experiences', data);
        dispatch({ type: ACTIONS.ADD_INTERVIEW_EXPERIENCE, data: response.data });
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, error: error.message || error });
      }
  }
    postInterviewExperience()
  }

  const deleteInterviewExperience = async (id: string) => {
    try {
      let response: any = await axios.delete(`http://localhost:8080/api/interview-experiences/${id}`)
      dispatch({ type: ACTIONS.DELETE_INTERVIEW_EXPERIENCE, data: response.data });
    } catch (error) {
      dispatch({ type: ACTIONS.ERROR, error: error.message || error });
    }
  }

  

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value)
  }

  const searchInterviewExperiences = interviewExperienceDetails.filter((interviewExperience: any) => {
    return Object.keys(interviewExperience).some(key =>
      String(interviewExperience[key]).toLowerCase().includes(searchTerm.toLowerCase())
    );
  })

 
  return (
    <div data-testid='interviewExperiencesComponent'>
      <h1>Interview Experiences Component</h1>
      <input id='search' type='text' value={searchTerm} placeholder='Search' onChange={handleSearch}/>
      <InterviewExperienceForm handleSubmit={postInterviewExperienceSubmitHandler} /> 
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {searchInterviewExperiences.map((experience: any) => {
            let {
              id,
              position,
              company,
              offer,
              info,
              rounds,
              likes,
              interviewDate,
            } = experience;

            offer ? (offer = 'Yes') : (offer = 'No');

            return (
              <li key={id}>
                <h1>Position: {position} <span><button onClick={()=>deleteInterviewExperience(id)}>x</button></span></h1>
                <h2>Company: {company}</h2>
                <h3>Offer: {offer.toString()}</h3>
                <h4>Rounds: {rounds}</h4>
                <p>Info: {info}</p>
                <p>
                  Date Submitted: {new Date(interviewDate).toLocaleString()}
                </p>
                <p>Likes:{likes}</p>
                <br />
                <p className='view-comments' onClick={() => getAllInterviewRepliesHandleClick(id)}>View Comments</p>
                {viewComments && interviewRepliesDetails.length ? interviewRepliesDetails.map((reply:any) => { <p>{reply.reply}</p> }) : null}
              
              </li>
            );
          })}  
        </ul>
      )}
    </div>
  );
};

export default InterviewExperiencesComponent;
