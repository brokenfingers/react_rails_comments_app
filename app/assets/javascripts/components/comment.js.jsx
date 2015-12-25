var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h4>{this.props.author} said:</h4>
        <p>{this.props.content}</p>
      </div>
    );
  }
});