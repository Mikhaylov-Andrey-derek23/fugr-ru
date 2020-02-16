import React, { Component } from 'react';
import "./Paginator.scss";

export default class Paginator extends Component {

    render() {
        return (
            <nav>
                <ul className="pagination justify-content-center">
                    <li className={this.props.paginator.paginatorPoint-2 <= 0 ? "page-item disabled" : "page-item"}>
                        <a className="page-link" value={this.props.paginator.paginatorPoint-2 } onClick={e=> this.props.changePaginator(e)}>Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" value={this.props.paginator.paginatorPoint-1} onClick={e=> this.props.changePaginator(e)}><span className={this.props.paginator.currentPoint == this.props.paginator.paginatorPoint-1 ? 'text-success font-weight-bold' : ''}>{this.props.paginator.paginatorPoint-1}</span></a></li>
                    <li className="page-item"><a className="page-link" value={this.props.paginator.paginatorPoint} onClick={e=> this.props.changePaginator(e)}><span className={this.props.paginator.currentPoint == this.props.paginator.paginatorPoint ? 'text-success font-weight-bold' : ''}>{this.props.paginator.paginatorPoint}</span></a></li>
                    <li className="page-item"><a className="page-link" value={this.props.paginator.paginatorPoint+1} onClick={e=> this.props.changePaginator(e)}><span className={this.props.paginator.currentPoint == this.props.paginator.paginatorPoint+1 ? 'text-success font-weight-bold' : ''}>{this.props.paginator.paginatorPoint+1}</span></a></li>
                    <li className={this.props.paginator.paginatorPoint+2 > this.props.paginator.paginatorPointEnd ? "page-item disabled" : "page-item"}>
                        <a className="page-link" value={this.props.paginator.paginatorPoint+2} onClick={e=> this.props.changePaginator(e)}>Next</a>
                    </li>
                </ul>
            </nav>
        )
    }
}