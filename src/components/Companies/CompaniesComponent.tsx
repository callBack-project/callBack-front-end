import { useReducer, useEffect } from 'react';
import axios from 'axios';
import { companiesDetailsReducer, ACTIONS, initialState } from './CompaniesReducer';
import CompaniesForm from './CompaniesForm'

const CompaniesComponent = () => {
  const [state, dispatch] = useReducer(companiesDetailsReducer, initialState);
  const { companiesDetails, loading, error } = state;
  useEffect(() => {
    dispatch({ type: ACTIONS.GET_COMPANIES });
    const getCompanies = async () => {
      try {
        let response: any = await axios.get(
          'http://localhost:8080/api/companies'
        );

        dispatch({ type: ACTIONS.SUCCESS, data: response.data });
        return;
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, error: error.message || error });
      }
    };
    getCompanies();
  }, []);
  return (
    <div>
      <h1>Companies Component</h1>
      <CompaniesForm/>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {companiesDetails.map((company: any) => (
            <li key={company.id}>
              <h1>{company.name}</h1>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompaniesComponent;