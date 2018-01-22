import React from 'react';
import Contacts from './Contacts';

require('./Home.css');

/*export default () => <h1>Hello World</h1>;*/


export default class Home extends React.Component {
  constructor(props) {
    super(props);

  this.state = {height:window.innerHeight,counter:0}
  this.counter=0;

  }
  addOne() {
      this.counter += 1
      this.forceUpdate()
    }
  render() {
    var h2=React.createElement('h2',null,"h2 tag created by React.createElement and showing through this.props.children of contacts component ");
    var contacts = React.createElement(Contacts,{title:"My name is: "},h2);


      //  let ct = <Contacts title="My name is: "/>
      let ct = React.createElement(Contacts,{title:"My name is: "},null);

    var tempContacts=React.cloneElement(ct,{name:"Manoj"},null);
    return (
      <div>
        {this.state.height}
       <h1>Hello World</h1>
       {contacts}
--------------------------------------
       {tempContacts}
        <Salmbog>
          <div id="clone" ref="cloneExample">Playing With React Clone elemnts role attribute added to this div </div>
          <span id="spanClone" ref="spanCloneExample">Playing With React Clone elemnts </span>
        </Salmbog>
<br></br>
Incrementing counter using component variable
<br></br>
        <button
         onClick={()=>{ this.addOne()} }>
         Increment
       </button>
       <br></br>
       { this.counter }
<div>
  <br></br>
  Incrementing counter by directly using this.state="xyz" instead of This.setState()
  <br></br>

       <button
        onClick={()=>{ this.state.counter++; this.forceUpdate();} }>
        Increment
      </button>
      <b>Increment By "this.state= xyz" and then callling forceUpdate </b>
      <br></br>
      {this.state.counter}
      </div>
    </div>
    );
  }
}

function Salmbog(props){
return(
  <div>
{
  React.Children.map(props.children,function(child){
    if (child.type=="span" && child.ref=="spanCloneExample"){
      return(
        child
      );
    }
    return(
    React.cloneElement(child,{
      role:"notdefined"
    })
  );
  })
}
  </div>
);
}
