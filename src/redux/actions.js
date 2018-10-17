export const fetchPosts = () => dispatch => {
  console.log("fetching")
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "GET"
  })
  .then(res => {
    if(res.ok) {
      return res.json()
    }
    else {
      return false
    }
  })
  .then(data => {
    if(data) {
      console.log("Fetched data:", data)


      dispatch({
        type: 'FETCH_POSTS',
        payload: data
      })
    }
  })
}
