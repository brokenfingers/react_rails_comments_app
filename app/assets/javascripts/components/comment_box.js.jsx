var CommentBox = React.createClass({
  // Presenter returns a comments hash and forms hash containing values needed to render the comments
  // And the form
  getInitialState: function() {
    return JSON.parse(this.props.presenter);
  },

  /* Makes an ajax request to create a new comment */
  handleCommentSubmit: function(formData, action) {
    $.ajax({
      data: formData,
      url: action,
      type: "POST",
      dataType: "json",
      success: function (data) {
        this.setState({comments: data});
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div className="commentBox">
        <CommentList comments={this.state.comments}/>
        <CommentForm form={this.state.form} onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
  }
});