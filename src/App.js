import React, { Component } from 'react';

import axios from 'axios';

import AddContact from './components/AddContact/AddContact';
import List from './components/List/List';
import './App.css';
import Edit from './components/Edit/Edit';


class App extends Component {

  state = {
    contact: [],
    isEdit: false,
    editId: null
}

  componentDidMount() {
    this.fetchContacts();
  }

  fetchContacts = async () => {
    const result = await axios.get('http://localhost:8000/contacts');
    this.setState({ contact: result.data })
  }

  handleAdd = async newContact => {
    await axios.post('http://localhost:8000/contacts', newContact)
    this.fetchContacts();
  }

  handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/contacts/${id}`);
    this.fetchContacts();
  }

  handleChangeStatus = async (index) => {
    const newData = [...this.state.contact];
    newData[index].status = !newData[index].status;
    await axios.put(`http://localhost:8000/contacts/${newData[index].id}`, newData[index]);
    this.fetchContacts();
  }

  handleEditId = (editId) => {
    this.setState({ editId })
    this.setState({ isEdit: !this.state.isEdit })
  }

  handleSaveContact = async (contact) => {
    console.log(contact)
    await axios.put(`http://localhost:8000/contacts/${contact.contactId}`, contact);
    this.fetchContacts();
  }

  render() {
    return (
      <div className="app">

        <AddContact 
          onAdd = {this.handleAdd}
        />

        <List
          data = {this.state.contact}
          onDelete = {this.handleDelete}
          handleEditId = {this.handleEditId}
          onChange = {this.handleChangeStatus} 
        />

        <Edit 
          data = {this.state.contact}
          isEdit = {this.state.isEdit}
          editId = {this.state.editId}
          handleEditId = {this.handleEditId}
          handleSaveContact={this.handleSaveContact}
        />
      </div>
    );
  }
} 

export default App;