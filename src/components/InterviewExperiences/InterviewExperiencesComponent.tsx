import { useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import InterviewExperienceForm from './InterviewExperiencesForm';
import { interviewExperienceDetailsReducer, ACTIONS, initialState } from './InterviewExperiencesReducer';

const InterviewExperiencesComponent = () => {
  const [state, dispatch] = useReducer(interviewExperienceDetailsReducer, initialState);
  const [searchTerm, setSearchTerm] = useState('');
  const [interviewExperiences, setInterviewExperiences] = useState([])
  const { interviewExperienceDetails, interviewRepliesDetails, loading, error } = state;
  const [viewComments, setViewComments] = useState(false)
  const [selectedInterviewReplies, setSelectedInterviewReplies] = useState({ replyId: '' })
  const [interviewReplies, setInterviewReplies] = useState([])
  console.log(interviewReplies, 'interview replies')
  
  useEffect(() => {
    dispatch({ type: ACTIONS.GET_INTERVIEW_EXPERIENCES });
    const getInterviewExperiences = async () => {
      try {
        let response: any = await axios.get(
          'http://localhost:8080/api/interview-experiences'
        );

        dispatch({ type: ACTIONS.SUCCESS, data: response.data });
        setInterviewExperiences(response.data)

        // return;
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, error: error.message || error });
      }
    };
    getInterviewExperiences();
  }, [interviewReplies]);

  
  // const getAllInterviewRepliesHandleClick = (id: any) => {
  //   const viewRepliesHandleClick = async () => {
  //     console.log(id)
  //     setViewComments(true)
  //     try {
  //       let response: any = await axios.get(`http://localhost:8080/api/interview-experiences/replies/${id}`)
  //       dispatch({ type: ACTIONS.GET_INTERVIEW_REPLIES_BY_INT_ID, data: response.data })
  //       return;
  //     } catch (error) {
  //       dispatch({ type: ACTIONS.ERROR, error: error.message || error });
  //     }
  //   }
  //   viewRepliesHandleClick();
  // }

useEffect(() => {
  const getInterviewReplies = async () => {
    setViewComments(true)
    try {
      let response: any = await axios.get(`http://localhost:8080/api/interview-experiences/replies/${selectedInterviewReplies.replyId}`)
      // console.log(response.data)
      dispatch({ type: ACTIONS.GET_INTERVIEW_REPLIES_BY_INT_ID, data: response.data });
      setInterviewReplies(response.data);
      return;
    } catch (error) {
      dispatch({ type: ACTIONS.ERROR, error: error.message || error });
    }
  }
  if (selectedInterviewReplies.replyId !== '') {
    getInterviewReplies();
  }
}, [selectedInterviewReplies]) 
  
  // useEffect(() => {
  //   const getAllInterviewRepliesHandleClick = async () => {
  //     const {data: scheduledSearches}  = await apiClientWithAuth.get(
  //       apiEndpoints.scheduledSearches,
  //       {
  //         params: {
  //           search: selectedSearch.id
  //         }
  //       }
  //     );
  //     setScheduledSearches(scheduledSearches)
  //   };
  //   if (selectedSearch.id !== '') {
  //     getScheduledSearches();
  //   }
  // }, [selectedSearch]);

  // useEffect(() => {
  //   const getScheduledSearches = async () => {
  //     const {data: scheduledSearches}  = await apiClientWithAuth.get(
  //       apiEndpoints.scheduledSearches,
  //       {
  //         params: {
  //           search: selectedSearch.id
  //         }
  //       }
  //     );
  //     setScheduledSearches(scheduledSearches)
  //   };
  //   if (selectedSearch.id !== '') {
  //     getScheduledSearches();
  //   }
  // }, [selectedSearch]);

 
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

  const searchInterviewExperiences = interviewExperiences.filter((interviewExperience: any) => {
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
                <p className='view-comments' onClick={() => setSelectedInterviewReplies({ replyId: id })}>View Comments</p>
              </li>
            );
          })}  
        </ul>
      )}
      {interviewReplies.map((reply: any) => {
                  return (
                    <p> { reply.reply }</p>
                  )
                })}
    </div>
  );
};

export default InterviewExperiencesComponent;
