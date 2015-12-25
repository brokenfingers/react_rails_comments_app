var CommentList = React.createClass({
  render: function() {
    var comments = this.props.comments.map(function(comment) {
      return (
        <Comment author={comment.author} content={comment.content}/>
      );
    });
    return (
      <div className="commentList">
        {comments}
      </div>
    );
  }
});