// import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions'

const initialState = {
  fetching: false,
  fetched: false,
  error: null
};

const fetch = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_START": {
      return {...state, fetching: true}
    }
    case "FETCH_POST": {
      return Object.assign({}, state, {
        photos: action.payload.results.hits
      })
    }
    case "FETCH_ERROR": {
      return {...state, error: action.payload}
    }
    default: {
      return state
    }
  }
}

export default fetch;
