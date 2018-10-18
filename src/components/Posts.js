import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../redux/actions'
import './Posts.css'

class Posts extends Component {
    handleDeletePost(id) {
      console.log("Post ID to be deleted: " + id)

      this.props.deletePost(id)

    }

    componentWillMount() {
      this.props.fetchPosts()
    }

    render() {
        const posts = this.props.posts.map(post => (
          <div className="grid-item" key={post.id}>
            <h4 className="postTitle" style={{fontSize: "16px"}}>{post.title}</h4>
            <p className="postBody" style={{fontSize: "10px"}}>{post.body}</p>
            <button>Edit</button>
            <button onClick={() => this.handleDeletePost(post.id)}>Delete</button>
          </div>
        ))

        return (
            <div>
              <h3>Posts</h3>

              <div className="grid-container">
                  {posts}
              </div>
            </div>
        );
    }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts);
