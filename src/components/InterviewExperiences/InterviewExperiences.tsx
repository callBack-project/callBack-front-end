import { useReducer, useEffect } from 'react';
import axios from 'axios';

const ACTIONS = {
  GET_INTERVIEWEXPERIENCES: 'GET_INTERVIEWEXPERIENCES',
  SUCCESS: 'success',
  ERROR: 'error',
};

const experienceDetailsReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.GET_INTERVIEWEXPERIENCES: {
      return {
        ...state,
        loading: true,
      };
    }
    case ACTIONS.SUCCESS: {
      return {
        ...state,
        loading: false,
        experienceDetails: action.data,
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
  experienceDetails: [],
  loading: false,
  error: null,
};

const Companies = () => {
  const [state, dispatch] = useReducer(experienceDetailsReducer, initialState);
  const { experienceDetails, loading, error } = state;
  useEffect(() => {
    dispatch({ type: ACTIONS.GET_INTERVIEWEXPERIENCES });
    const getExperiences = async () => {
      try {
        let response: any = await axios.get(
          'http://localhost:8080/api/interview-experiences'
        );
        console.log(response.data);
        dispatch({ type: ACTIONS.SUCCESS, data: response.data });
        return;
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, error: error.message || error });
      }
    };
    getExperiences();
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
          {experienceDetails.map((experience: any) => {
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
                <h1>Position: {position}</h1>
                <h2>Company: {company}</h2>
                <h3>Offer: {offer.toString()}</h3>
                <h4>Rounds: {rounds}</h4>
                <p>Info: {info}</p>
                <p>
                  Date Submitted: {new Date(interviewDate).toLocaleString()}
                </p>
                <p>Likes:{likes}</p>
                <br />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Companies;
