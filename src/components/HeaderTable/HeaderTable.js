import React, { Component } from 'react';
import './HeaderTable.scss';

export default class HeaderTable extends Component {
    render() {
        return (
            <thead className="thead-light">
                <tr>
                    <th scope="col" className="cursor-pointer" value="id" onClick={e => this.props.sortdata(e)}>id <i className={this.props.sortStatus.id == 0 ? "fa fa-angle-up ml-3" : "fa fa-angle-down ml-3"}></i></th>
                    <th scope="col" className="cursor-pointer" value="firstName" onClick={e => this.props.sortdata(e)}>Name<i className={this.props.sortStatus.firstName == 0 ? "fa fa-angle-up ml-3" : "fa fa-angle-down ml-3"}></i></th>
                    <th scope="col" className="cursor-pointer" value="lastName" onClick={e => this.props.sortdata(e)}>Second Name<i className={this.props.sortStatus.lastName == 0 ? "fa fa-angle-up ml-3" : "fa fa-angle-down ml-3"}></i></th>
                    <th scope="col" className="cursor-pointer" value="phone" onClick={e => this.props.sortdata(e)}>Phone<i className={this.props.sortStatus.phone == 0 ? "fa fa-angle-up ml-3" : "fa fa-angle-down ml-3"}></i></th>
                    <th scope="col" className="cursor-pointer" value="email" onClick={e => this.props.sortdata(e)}>Email<i className={this.props.sortStatus.email == 0 ? "fa fa-angle-up ml-3" : "fa fa-angle-down ml-3"}></i></th>
                </tr>
            </thead>
        )
    }
}
