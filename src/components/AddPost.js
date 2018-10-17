import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../redux/actions'
import './AddPost.css'

class AddPost extends Component {
    handleSubmit = (e) => {
      e.preventDefault()

      const title = this.getTitle.value;
      const body = this.getBody.value;
      const data = {
        title,
        body
      }

      console.log("submitted data", data)

      // this.props.dispatch({
      //   type: 'ADD_POST',
      //   data
      // })

      this.props.addPost(data)

      this.getTitle.value = ''
      this.getBody.value = ''
    }

    render() {

        return (
            <div>
            <h3>Add Post</h3>

            <form onSubmit={this.handleSubmit}>
              <input required type="text" ref={(input) => this.getTitle = input}
                placeholder="Enter Title" />
              <br/><br/>
              <textarea required rows="2" ref={(input) => this.getBody = input} cols="14"
                placeholder="Enter Body" />

              <br/><br/>
              <button>Add Post</button>
            </form>
            </div>
        );
    }
}

AddPost.propTypes = {
  addPost: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  addPost
}

export default connect(null, mapDispatchToProps)(AddPost);
