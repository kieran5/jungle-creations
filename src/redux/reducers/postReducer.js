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

    case 'EDIT_POST':
      console.log("reducer - edit hit")
      return {
        ...state,
        posts: state.posts.map((post) => post.id === action.id ? {...post, editing: !post.editing} : post)
      }

    case 'UPDATE_POST':
      console.log("reducer - post update")
      return {
        ...state,
        posts: state.posts.map((post) => {
          if(post.id === action.payload.id) {
            console.log({
              ...post,
              title: action.payload.title,
              body: action.payload.body,
              editing: !post.editing
            })
            return {
              ...post,
              title: action.payload.title,
              body: action.payload.body,
              editing: !post.editing
            }
          }
          else {
            return post
          }
        })
      }

    default:
      return state;
  }
}
