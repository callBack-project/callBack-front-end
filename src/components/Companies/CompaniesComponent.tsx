import { useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import { companyDetailsReducer, ACTIONS, initialState } from './CompaniesReducer';
import CompaniesForm from './CompaniesForm'

const CompaniesComponent = () => {
  const [state, dispatch] = useReducer(companyDetailsReducer, initialState);
  const { companyDetails, loading, error } = state;
  const [searchTerm, setSearchTerm] = useState('');


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
  
  const postCompanySubmitHandler = ( data: any) => {
    const postCompany = async () => {

      try {
        let response: any = await axios.post('http://localhost:8080/api/companies', data);

        dispatch({ type: ACTIONS.ADD_COMPANY, data: response.data });
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, error: error.message || error });
      }
  }
    postCompany()
  }

  const deleteCompany = async (id: string) => {

    try {
      let response: any = await axios.delete(`http://localhost:8080/api/companies/${id}`)
      dispatch({ type: ACTIONS.DELETE_COMPANY, data: response.data });

    } catch (error) {
      dispatch({ type: ACTIONS.ERROR, error: error.message || error });
    }
  }

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value)
  }

  const searchCompany = companyDetails.filter((company: any) => {
    return company.name.toLowerCase().includes(searchTerm.toLowerCase());
  })


  return (
    <div data-testid='companiesComponent'>
      <h1>Companies Component</h1>
      <CompaniesForm handleSubmit={postCompanySubmitHandler}/>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
        ) : (
            
        <ul>
          <input id='search' type='text' value={searchTerm} placeholder='Search' onChange={handleSearch}/>
          {searchCompany.map((company: any) => (
            <li key={company.id}>
              <h1>{company.name} <span><button onClick={() => deleteCompany(company.id)}>x</button></span></h1>
              <p>{company.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompaniesComponent;
