export const ACTIONS = {
  GET_COMPANIES: 'GET_COMPANIES',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const companiesDetailsReducer = (state: any, action: any) => {
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

export const initialState = {
  companiesDetails: [],
  loading: false,
  error: null,
};