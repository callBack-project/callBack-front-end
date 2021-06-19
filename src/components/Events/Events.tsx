import React, { useReducer, useEffect } from 'react'
import axios from 'axios';

const ACTIONS = {
  GET_EVENTS: 'GET_EVENTS',
  SUCCESS: 'success',
  ERROR: 'error'
}

const eventDetailsReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.GET_EVENTS: {
      return {
        ...state,
        loading: true,
      }
    }
    case ACTIONS.SUCCESS: {
      return {
        ...state,
        loading: false,
        eventDetails: action.data,
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
  eventDetails: [],
  loading: false,
  error: null,
}


const Events = () => {
  const [state, dispatch] = useReducer(eventDetailsReducer, initialState);
  const { eventDetails, loading, error } = state;
  useEffect(() => {
    dispatch({ type: ACTIONS.GET_EVENTS });
    const getEvents = async () => {
      try {
        let response: any = await axios.get('http://localhost:8080/api/events');

        dispatch({ type: ACTIONS.SUCCESS, data: response.data });
        return;
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, error: error.message || error });
      }
    }
    getEvents();
  }, [])
  return (
    <div>
      <h1>Events Component</h1>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
          <p>{error}</p>
        ) : (
            <ul>
              {eventDetails.map((event: any) => (
                <li key={event.id}>
                  <h1>{event.name}</h1>
                </li>
              ))}
            </ul>
      )}
    </div>
  ) 
}

export default Events