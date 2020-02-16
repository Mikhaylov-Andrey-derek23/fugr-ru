import React, { Component } from 'react';

export default class FiltterTable extends Component {

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
        return (
            <div>
                <h2 className="text-center">Search the table</h2>
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
                                    <button type="button" className="btn btn-success mx-auto d-flex btn-lg" onClick={e=>this.props.applyFilter(this.state)}>Finnd</button>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}