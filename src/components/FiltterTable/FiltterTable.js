import React, { Component } from 'react';

export default class FiltterTable extends Component {

    render() {
        return (
            <div>
                <h2 className="text-center">Search the table</h2>
                <table className="table">
                    <thead className="thead-light">
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
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <input />
                            </th>
                            <th>
                                <input />
                            </th>
                            <th>
                                <input />
                            </th>
                            <th>
                                <input />
                            </th>
                            <th>
                                <input />
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}