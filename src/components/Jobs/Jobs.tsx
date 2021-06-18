import React, { useReducer, useEffect } from 'react'
import axios from 'axios';

const ACTIONS = {
  GET_JOBS: 'GET_JOBS',
  SUCCESS: 'success',
  ERROR: 'error'
}

const jobDetailsReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.GET_JOBS: {
      return {
        ...state,
        loading: true,
      }
    }
    case ACTIONS.SUCCESS: {
      return {
        ...state,
        loading: false,
        userDetails: action.data,
      }
    }
    case ACTIONS.ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    }
  }
};

const initialState = {
  jobDetails: [],
  loading: false,
  error: null,
}


const Jobs = () => {
  const [state, dispatch] = useReducer(jobDetailsReducer, initialState);
  const { jobDetails, loading, error } = state;
  useEffect(() => {
    dispatch({ type: ACTIONS.GET_JOBS });
    const getJobs = async () => {
      try {
        let response: any = await axios.get('http://localhost:8080/api/jobs');

        dispatch({ type: ACTIONS.SUCCESS, data: response.data });
        return;
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, error: error.message || error });
      }
    }
    getJobs();
  }, [])
  return (
    <div>
      <h1>Jobs Component</h1>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
          <p>{error}</p>
        ) : (
            <ul>
              {jobDetails.map((job: any) => (
                <li key={job.id}>
                  <h1>{job.position}</h1>
                </li>
              ))}
            </ul>
      )}
    </div>
  )
}

export default Jobs
