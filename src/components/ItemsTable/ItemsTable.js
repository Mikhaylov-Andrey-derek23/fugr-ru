import React, { Component } from 'react';
export default class ItemsTable extends Component{

    render(){
        return(
            <tbody>
                {this.props.Data.map(el =><tr key={el.id+"-"+el.phone} onClick={e=>this.props.selectItem(el)} className="cursor-pointer">
                    <td>{el.id}</td>
                    <td>{el.firstName}</td>
                    <td>{el.lastName}</td>
                    <td>{el.phone}</td>
                    <td>{el.email}</td>
                </tr>)}
        </tbody>
        )
    }
}