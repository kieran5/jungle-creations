import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updatePost } from '../redux/actions'

class EditPost extends Component {
    handleEdit = (e) => {
      e.preventDefault()

      const newTitle = this.getTitle.value;
      const newBody = this.getBody.value;

      const formData = {
        newTitle,
        newBody
      }

      console.log("edit data submitted", formData)

      this.props.updatePost(this.props.post.id, formData)
    }

    render() {

        return (
            <div>
              <form onSubmit={this.handleEdit}>
                <input required type="text" ref={(input) => this.getTitle = input}
                  defaultValue={this.props.post.title} placeholder="Enter Title" />
                <br/><br/>
                <textarea required rows="2" ref={(input) => this.getBody = input} cols="14"
                  defaultValue={this.props.post.body} placeholder="Enter Body" />

                <br/><br/>
                <button>Update</button>
              </form>
            </div>
        );
    }
}

EditPost.propTypes = {
  updatePost: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  updatePost
}

export default connect(null, mapDispatchToProps)(EditPost);
