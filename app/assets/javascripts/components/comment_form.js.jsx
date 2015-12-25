var CommentForm = React.createClass({
  // Since ref is not recommended to do this in the same way as using ref would be to use 
  // csrf token and params as CommentForm state
  getInitialState: function() {
    return ({
      author: '',
      content: ''
    });
  },

  handleAuthorChange: function(event) {
    this.setState({author: event.target.value});
  },

  handleContentChange: function(event) {
    this.setState({content: event.target.value});
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var author = this.state.author.trim();
    var content = this.state.content.trim();

    if (!author || !content) {
      return;
    }

    // Submit
    var formData = $( this.refs.form.getDOMNode() ).serialize();
    this.props.onCommentSubmit(formData, this.props.form.action)

    // Reset form fields
    this.refs.author.getDOMNode().value = "";
    this.refs.content.getDOMNode().value = "";this.setState({author:'', content:''});
  },

  render: function() {
    return (
      <div className="commentForm">
        <form ref="form" className="comment-form" action={ this.props.form.action } accept-charset="UTF-8" method="post" onSubmit={ this.handleSubmit }>
        <p><input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } /></p>
        <p><input ref="author" name="comment[author]" placeholder="Your name" onChange={this.handleAuthorChange}/></p>
        <p><textarea ref="content" name="comment[content]" placeholder="Comment..." onChange={this.handleContentChange}/></p>
        <p><button type="submit">Post comment</button></p>
      </form>
      </div>
    );
  }
});