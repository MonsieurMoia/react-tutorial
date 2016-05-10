var React = require("react");

var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var updates = {},
        name = this.refs.name.value,
        message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = "";
      updates.name = name;
    }
    if(message.length > 0){
      this.refs.message.value = "";
      updates.message = message;
    }

    // Update Updates Object
    this.props.onNewData(updates);
  },
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" placeholder="Enter name"/>
        <br></br>
        <textarea ref="message" placeholder="Enter Message"></textarea>
        <br></br>
        <button>Set Name</button>
      </form>
    )
  }
})

module.exports = GreeterForm;
