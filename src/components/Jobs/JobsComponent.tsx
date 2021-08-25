import { useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import JobsForm from './JobsForm';
import { jobDetailsReducer, ACTIONS, initialState } from './JobsReducer';

const JobsComponent = () => {
  const [state, dispatch] = useReducer(jobDetailsReducer, initialState);
  const [searchTerm, setSearchTerm] = useState('');
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

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value)
  }

  const searchJobs = jobDetails.filter((user: any) => {
    return Object.keys(user).some(key =>
      String(user[key]).toLowerCase().includes(searchTerm.toLowerCase())
    );
  })
  


  return (
    <div data-testid='jobsComponent'>
      <h1>Jobs Component</h1>
      <JobsForm handleSubmit={postJobSubmitHandler} />
      <input id='search' type='text' value={searchTerm} placeholder='Search' onChange={handleSearch}/>
      
      {loading ? (
        <p>loading...</p>
      ) : error ? (
          <p>{error}</p>
        ) : (
            <ul>
              {searchJobs.map((job: any) => (
                <li key={job.id}>
                  <h1>{job.position} <span><button onClick={()=>deleteJob(job.id)}>x</button></span></h1>
                </li>
              ))}
            </ul>
      )}
    </div>
  )
}

export default JobsComponent
