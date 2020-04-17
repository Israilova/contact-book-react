import React, { Component } from 'react';

import './List.css';

class List extends Component {

    render() { 
        
        const data = this.props.data

        return (
            <div className ="list">
                <div className="contact-list">
                    {data.map((contact, index) => (
                        <div className="field" key ={index}>
                            <div className ={`contact ${contact.status ? 'completed' : ''}`}>
                                <p>contact # {index+1}</p>
                                <div> name: <strong>{contact.name}</strong></div>
                                <div> last name: <strong>{contact.lastName}</strong></div>
                                <div> e-mail: <strong>{contact.email}</strong></div>
                                <div> phone: <strong>{contact.phoneNumber}</strong></div>
                            </div>
                            <div className="contact-buttons">
                                <button 
                                    className="del-btn" 
                                    onClick = { () => {
                                        this.props.onDelete(contact.id)}}>delete
                                </button>
                                <button 
                                    onClick = { () => {                                    
                                        this.props.handleEditId(index)
                                        }} 
                                    className="btn-edit">
                                    edit
                                </button>
                                <button 
                                    onClick = { () => { 
                                        this.props.onChange(index)
                                        }}
                                    className="btn-change">
                                    change status   
                                </button>
                            </div>
                        </div>                    
                    ))}
                </div>
            </div>
        );
    }
}

export default List;