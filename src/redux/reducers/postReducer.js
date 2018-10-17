const initialState = {
  posts: [],
  post: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_POSTS':
      console.log("fetch posts in reducer hit")
      return {
        ...state,
        posts: action.payload
      }

    case 'ADD_POST':
      console.log("add post in reducer hit")
      return {
        ...state,
        posts: state.posts.concat([action.payload])
      }

    default:
      return state;
  }
}
