import React, { Component } from 'react';

export default class SpinnerTable extends Component {

    render() {
        return (
            <tbody>
                <tr>
                    <th colSpan="5">
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </th>
                </tr>

            </tbody>

        )
    }
}