import React, { Component } from 'react';

import './AddContact.css';

class AddContact extends Component {

    state = {
        name: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    }

    handleName = event => {
        const name = event.target.value;
        this.setState({ name })
    }

    handleLastName = event => {
        const lastName = event.target.value;
        this.setState({ lastName })
    }

    handleEmail = event => {
        const email = event.target.value;
        this.setState({ email })
    }

    handlePhoneNumber = event => {
        const phoneNumber = event.target.value;
        this.setState({ phoneNumber })
    }

    handleClick = () => {
        
        const nameValue = this.state.name;
        const lastNameValue= this.state.lastName;
        const emailValue = this.state.email;
        const phoneNumberValue = this.state.phoneNumber;

        if(!nameValue || !lastNameValue || !emailValue || !phoneNumberValue) return alert('Please enter full data')

        // console.log(this.state)
       
        this.props.onAdd(this.state)

        this.setState({name: '', lastName: '', email: '', phoneNumber: ''})

    }

    render() {
        return (
            <div className="add-contact">
                <input 
                    type ="text" 
                    placeholder ="Name"
                    value = {this.state.name}
                    onChange = {this.handleName}
                />
                <input type ="text" 
                    placeholder ="Last name"
                    value = {this.state.lastName}
                    onChange ={this.handleLastName}
                />
                <input type ="email" 
                    placeholder ="E-mail"
                    value = {this.state.email}
                    onChange = {this.handleEmail}
                />
                <input type ="number" 
                    placeholder ="Phone number"
                    value = {this.state.phoneNumber}
                    onChange = {this.handlePhoneNumber}
                />   
                <button 
                    className ="add-btn"
                    onClick = {this.handleClick}
                >add
                </button>             
            </div>
        );
    }
}

export default AddContact;