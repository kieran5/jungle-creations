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

    case 'DELETE_POST':
      console.log("reducer - delete hit")
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.id)
      }

    default:
      return state;
  }
}
