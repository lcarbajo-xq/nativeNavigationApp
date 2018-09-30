

export default function reducers (state = {}, action) {
  switch (action.type) {
    case 'SET_MOVIE_LIST':{
      return {...state, ...action.payload}
    }
    case 'SET_SUGGESTION_LIST':{
      return {...state, ...action.payload}
    }
    case 'SET_SELECTED_MOVIE':{
      return {...state, selectedMovie: action.payload.movie }
    }
    default:
        return state
    }
}
