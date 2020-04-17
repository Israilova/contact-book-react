import React, { Component } from 'react';

import './Edit.css';

class Edit extends Component {

    state = {
        currentContact: {
            name: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            contactId: ''
        }
    }

    shouldComponentUpdate(nextProps) {
        if(nextProps.editId !== this.props.editId) {
            this.changeState(nextProps.data, nextProps.editId)
            console.log(nextProps.data[nextProps.editId].id)
        }
        return true
    }

    changeState = (data, id) => {
        let name = data[id].name
        let lastName = data[id].lastName
        let email = data[id].email
        let phoneNumber = data[id].phoneNumber
        let contactId = data[id].id

        this.setState({ currentContact: {...this.state.currentContact, name, lastName, email, phoneNumber, contactId }})
    }

    handleInputName = event => {
        let name = event.target.value
        this.setState({ currentContact: {...this.state.currentContact, name} })
    }

    handleInputLastName = event => {
        let lastName = event.target.value
        this.setState({ currentContact: {...this.state.currentContact, lastName} })
    }

    handleInputEmail = event => {
        let email = event.target.value
        this.setState({ currentContact: {...this.state.currentContact, email} })
    }

    handleInputPhoneNumber = event => {
        let phoneNumber = event.target.value
        this.setState({ currentContact: {...this.state.currentContact, phoneNumber} })
    }

    handleSave = () => {
        const id = this.props.editId

        this.props.handleSaveContact(this.state.currentContact)

        this.props.handleEditId(id)
    }

    render() {

        const currentContact = this.state.currentContact

        return (
            <div>
                {this.props.isEdit ? (
                    <div className="modal-window">
                        <div className="modal-body">
                            <input 
                                onChange = {e => this.handleInputName(e)} 
                                value={currentContact.name}
                            />
                            <input 
                                onChange = {e => this.handleInputLastName(e)} 
                                value={currentContact.lastName}
                            />
                            <input 
                                onChange = {e => this.handleInputEmail(e)} 
                                value={currentContact.email}
                            />
                            <input 
                                onChange = {e => this.handleInputPhoneNumber(e)} 
                                value={currentContact.phoneNumber}
                            />
                            <button 
                                onClick = {this.handleSave}>
                                save
                            </button>
                        </div>
                    </div>
                ): false}                
            </div>
        );
    }
}

export default Edit;