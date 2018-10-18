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

export const addPost = (formData) => dispatch => {
  console.log("adding post")
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: formData.title,
      body: formData.body,
      userId: 1
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
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
      console.log("New post added: ", data)

      dispatch({
        type: 'ADD_POST',
        payload: data
      })
    }
  })
}

export const deletePost = (id) => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE'
  })
  .then(res => {
    if(res.ok) {
      dispatch({
        type: 'DELETE_POST',
        id: id
      })
    }
  })

}
