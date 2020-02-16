import React, { Component } from 'react';

export default class WindiowItem extends Component{

    render(){
        return(
            <div className="modal show">
                <div className="modal-dialog dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="button" className="close" data-dismiss="modal" aria-label="Close" onClick={e => this.props.close()}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                                <h2 className="text-center"> 
                                    {this.props.data.firstName+' '+this.props.data.lastName}
                                </h2>
                                <div>{
                                this.props.data.description ? <div>
                                    <h6 className="text-center">Description</h6>
                                    <p>{this.props.data.description}</p>
                                    <h6 className="text-center">Address</h6>
                                    <p>Residential address: <span className="font-weight-bold ml-3">{this.props.data.address.streetAddress}</span></p>
                                    <p>City: <span className="font-weight-bold ml-3">{this.props.data.address.city}</span></p>
                                    <p>Province/state: <span className="font-weight-bold ml-3">{this.props.data.address.state}</span></p>
                                    <p>Index <span className="font-weight-bold ml-3">{this.props.data.address.zip}</span></p>

                                    
                                </div>
                                : ""}
                                </div>
                            <div>
                                
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