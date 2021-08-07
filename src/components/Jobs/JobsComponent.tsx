import { useReducer, useEffect } from 'react';
import axios from 'axios';
import JobsForm from './JobsForm';
import { jobDetailsReducer, ACTIONS, initialState } from './JobsReducer';
import FooterComponent from '../Footer/FooterComponent';


const JobsComponent = () => {
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

  const postJobSubmitHandler = ( data: any) => {
    const postJob = async () => {

      try {
        let response: any = await axios.post('http://localhost:8080/api/jobs', data);

        dispatch({ type: ACTIONS.ADD_JOB, data: response.data });
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, error: error.message || error });
      }
  }
    postJob()
  }

  const deleteJob = async (id: string) => {

    try {
      let response: any = await axios.delete(`http://localhost:8080/api/jobs/${id}`)
      dispatch({ type: ACTIONS.DELETE_JOB, data: response.data });

    } catch (error) {
      dispatch({ type: ACTIONS.ERROR, error: error.message || error });
    }
  }

  return (
    <div className='content' data-testid='jobsComponent'>
      <h1>Jobs Component</h1>
      <JobsForm handleSubmit={postJobSubmitHandler}/>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
          <p>{error}</p>
        ) : (
            <ul>
              {jobDetails.map((job: any) => (
                <li key={job.id}>
                  <h1>{job.position} <span><button onClick={()=>deleteJob(job.id)}>x</button></span></h1>
                </li>
              ))}
            </ul>
      )}
      <FooterComponent/>
    </div>
  )
}

export default JobsComponent
