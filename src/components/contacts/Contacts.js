import React, { Component } from 'react';
import Contact from './Contact';

// importer les element de state
import {connect} from 'react-redux';

class Contacts extends Component {
  state = {
    contacts: [
      // {
      //   id: 1,
      //   name: 'Mohamed IDBRAHIM',
      //   email: 'idbrahimdev@gmail.com',
      //   phone: '0650303315'
      // },
      // {
      //   id: 2,
      //   name: 'Basma IDBRAHIM',
      //   email: 'basma@gmail.com',
      //   phone: '0650303316'
      // },
      // {
      //   id: 3,
      //   name: 'Walid IDBRAHIM',
      //   email: 'walid@gmail.com',
      //   phone: '0650303317'
      // }
    ]
  };

  // fonction de chargeent du componenet
  componentDidMount(){
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-success">Contacts</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

// recupérer le state
const mapStateToProps = (state) => {
  return {
    contacts: state.contact.contacts
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getContacts: () =>{
      dispatch({
        type: 'GET_CONTACTS'
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
