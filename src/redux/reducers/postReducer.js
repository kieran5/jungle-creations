const initialState = {
  posts: [],
  post: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_POSTS':
      console.log("reducer hit")
      return {
        ...state,
        posts: action.payload
      }
    default:
      return state;
  }
}
