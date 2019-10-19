import React, { Component } from 'react';
import Contact from './Contact';


 class Contacts extends Component {
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
  
  render() {
    const {contacts}=this.state;
    return (
      <React.Fragment>
        {contacts.map(contact=>(
         <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    )
  }
}


export default Contacts;