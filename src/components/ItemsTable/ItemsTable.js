import React, { Component } from 'react';
export default class ItemsTable extends Component{

    render(){
        return(
            <tbody>
                {this.props.Data.map(e =><tr key={e.id+"-"+e.phone}>
                    <td>{e.id}</td>
                    <td>{e.firstName}</td>
                    <td>{e.lastName}</td>
                    <td>{e.phone}</td>
                    <td>{e.email}</td>
                </tr>)}
        </tbody>
        )
    }
}