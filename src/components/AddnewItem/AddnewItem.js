import React, { Component } from 'react';
import './AddnewItem.scss'

export default class AddnewItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        }
    }

    onchageInput(e) {
        const data = this.state;
        data[e.target.name] = e.target.value;
        this.setState(data);
    }


    render() {
        console.log(this.props)
        return (
            <div className="modal show">
                <div className="modal-dialog dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="button" className="close" data-dismiss="modal" aria-label="Close" onClick={e => this.props.close()}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <h2 className="text-center">Add new item in table</h2>
                                <table className="table">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">
                                                Id
                        </th>
                                            <th scope="col">
                                                Name
                        </th>
                                            <th scope="col">
                                                Second Name
                        </th>
                                            <th scope="col">
                                                Phone
                        </th>
                                            <th scope="col">
                                                Email
                        </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <input name="id" value={this.state.id} onChange={e => this.onchageInput(e)} />
                                            </th>
                                            <th>
                                                <input name="firstName" value={this.state.firstName} onChange={e => this.onchageInput(e)} />
                                            </th>
                                            <th>
                                                <input name="lastName" value={this.state.lastName} onChange={e => this.onchageInput(e)} />
                                            </th>
                                            <th>
                                                <input name="phone" value={this.state.phone} onChange={e => this.onchageInput(e)} />
                                            </th>
                                            <th>
                                                <input name="email" value={this.state.email} onChange={e => this.onchageInput(e)} />
                                            </th>
                                        </tr>
                                        <tr>
                                            <th colSpan="5">
                                                <div>
                                                    {this.state.id.length > 0 && this.state.firstName.length > 0 &&  this.state.lastName.length > 0 &&  this.state.phone.length> 0 &&  this.state.email.length> 0 ? <button type="button" className="btn btn-success mx-auto d-flex btn-lg" onClick={e => this.props.addTable(this.state)}>Add</button> : <p className="text-danger text-center">fill out all forms</p>}
                                                    
                                                </div>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={e => this.props.close()}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}