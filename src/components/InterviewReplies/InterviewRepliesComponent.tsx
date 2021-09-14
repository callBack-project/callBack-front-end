import { useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import { interviewRepliesDetailsReducer, ACTIONS, initialState } from './InterviewRepliesReducer';


const InterviewRepliesComponent = () => {
  const [state, dispatch] = useReducer(interviewRepliesDetailsReducer, initialState);
  // const [searchTerm, setSearchTerm] = useState('');
  const { interviewRepliesDetails, loading, error } = state;
  
  useEffect(() => {
    dispatch({ type: ACTIONS.GET_INTERVIEW_REPLIES_BY_INT_ID });
    const getInterviewReplies = async () => {
      try {
        let response: any = await axios.get(
          'http://localhost:8080/api/interview-replies/:interviewExperienceId'
        );
        console.log(response.data);
        dispatch({ type: ACTIONS.SUCCESS, data: response.data });
        return;
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, error: error.message || error });
      }
    };
    getInterviewReplies();
  }, []);

  // const postInterviewExperienceSubmitHandler = ( data: any) => {
  //   const postInterviewExperience = async () => {

  //     try {
  //       let response: any = await axios.post('http://localhost:8080/api/interview-experiences', data);

  //       dispatch({ type: ACTIONS.ADD_INTERVIEW_EXPERIENCE, data: response.data });
  //     } catch (error) {
  //       dispatch({ type: ACTIONS.ERROR, error: error.message || error });
  //     }
  // }
  //   postInterviewExperience()
  // }

  // const deleteInterviewExperience = async (id: string) => {

  //   try {
  //     let response: any = await axios.delete(`http://localhost:8080/api/interview-experiences/${id}`)
  //     dispatch({ type: ACTIONS.DELETE_INTERVIEW_EXPERIENCE, data: response.data });

  //   } catch (error) {
  //     dispatch({ type: ACTIONS.ERROR, error: error.message || error });
  //   }
  // }
  // const handleSearch = (event: any) => {
  //   setSearchTerm(event.target.value)
  // }

  // const searchInterviewExperiences = interviewExperienceDetails.filter((interviewExperience: any) => {
  //   return Object.keys(interviewExperience).some(key =>
  //     String(interviewExperience[key]).toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // })
  return (
    <div data-testid='interviewExperiencesComponent'>
      <h1>Interview Experiences Component</h1>
      {/* <input id='search' type='text' value={searchTerm} placeholder='Search' onChange={handleSearch}/> */}
      {/* <InterviewExperienceForm handleSubmit={postInterviewExperienceSubmitHandler} />  */}
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {interviewRepliesDetails.map((reply: any) => {
            return (
              <li key={reply.id}>
                <h1>{reply.reply} </h1>
                
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default InterviewRepliesComponent;