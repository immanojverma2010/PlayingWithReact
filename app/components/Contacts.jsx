import React from 'react';
import ReactDOM from 'react-dom';
//export default () => <h2>Contacts</h2>;

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }


showHidden(){
  var h1 =   <SplitPane
        left={
          <Showing />
        }
        right={
          <Composition />
        } />
  ReactDOM.render(h1,document.getElementById("generateNames"))
}

  render() {
var dv = React.createElement("div",null,"div Element created through React.createElement")

var name = this.props.name !== undefined ? this.props.name :"not defined"
    return (
      <div>
        Start              {dv}

                {this.props.title}
              <b> {name} </b>

             {this.props.children}
           <br></br>
             <button type="button" className="btn btn-primary" onClick={this.showHidden}>Primary</button>

<div id="generateNames">

     </div>
</div>
    );
  }
}
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}
function Showing() {
  return (
    <div >
      Showing
    </div>
  );
}
function Composition() {
  return (
    <div >
      Functional Composition in React JS using ReactDOM.render through a function.
    </div>
  );
}
