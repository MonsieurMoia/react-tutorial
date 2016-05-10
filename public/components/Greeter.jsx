var React = require("react"),
    GreeterMessage = require("./GreeterMessage"),
    GreeterForm = require("./GreeterForm");

var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: "React!",
      message: "This is from a comp"
    }
  },
  getInitialState: function(){
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewData: function(updates){
    this.setState(updates);
    // Antes creaba el objeto
    // this.setState({
    //   name: name,
    //   message:message
    // })
    // No es necesario porque updates ya es un objeto
  },
  render: function(){
    var name = this.state.name,
        message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

module.exports = Greeter;
