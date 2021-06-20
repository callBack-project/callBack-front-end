import { useReducer, useEffect } from 'react';
import axios from 'axios';

const ACTIONS = {
  GET_INTERVIEW_EXPERIENCES: 'GET_INTERVIEW_EXPERIENCES',
  SUCCESS: 'success',
  ERROR: 'error',
};

const interviewExperiencesDetailsReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.GET_INTERVIEW_EXPERIENCES: {
      return {
        ...state,
        loading: true,
      };
    }
    case ACTIONS.SUCCESS: {
      return {
        ...state,
        loading: false,
        companiesDetails: action.data,
      };
    }
    case ACTIONS.ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
  }
};

const initialState = {
  interviewExperiencesDetails: [],
  loading: false,
  error: null,
};

const InterviewExperiences = () => {
  const [state, dispatch] = useReducer(
    interviewExperiencesDetailsReducer,
    initialState
  );
  const { interviewExperiencesDetails, loading, error } = state;
  useEffect(() => {
    dispatch({ type: ACTIONS.GET_INTERVIEW_EXPERIENCES });
    const getInterviewExperiences = async () => {
      try {
        let response: any = await axios.get(
          'http://localhost:8080/api/interview-experiences'
        );

        dispatch({ type: ACTIONS.SUCCESS, data: response.data });
        return;
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, error: error.message || error });
      }
    };
    getInterviewExperiences();
  }, []);
  return (
    <div>
      <h1>Interview Experiences Component</h1>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {interviewExperiencesDetails.map((experience: any) => (
            <li key={experience.id}>
              <h1>{experience.company}</h1>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InterviewExperiences;
