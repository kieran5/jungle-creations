import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions'
import './Posts.css'

class Posts extends Component {
    componentWillMount() {
      this.props.fetchPosts()
    }

    render() {
        const posts = this.props.posts.map(post => (
          <div className="grid-item" key={post.id}>
            <h4 className="postTitle" style={{fontSize: "16px"}}>{post.title}</h4>
            <p className="postBody" style={{fontSize: "10px"}}>{post.body}</p>
          </div>
        ))

        return (
            <div className="grid-container">
                {posts}

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

export default connect(mapStateToProps, { fetchPosts })(Posts);
