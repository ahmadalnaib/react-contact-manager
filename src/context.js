import React,{Component} from 'react';

const Context=React.createContext();

export class Provider extends Component {
  state= {
    contacts:[
      {
        id:1,
        name:"ahmed",
        email:"alnaib1988@gmail.com",
        phone:"12345678"
      },
      {
        id:2,
        name:"ali",
        email:"ali@gmail.com",
        phone:"5678"
      }
    ]
  }
  

  render(){
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}


export const Consumer =Context.Consumer;