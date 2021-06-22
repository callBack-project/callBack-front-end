import { useReducer, useEffect } from 'react';
import axios from 'axios';

const ACTIONS = {
  GET_COMPANIES: 'GET_COMPANIES',
  SUCCESS: 'success',
  ERROR: 'error',
};

const companiesDetailsReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.GET_COMPANIES: {
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
  companiesDetails: [],
  loading: false,
  error: null,
};

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
