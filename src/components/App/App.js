import React, { Component } from 'react';
import ItemsTable from '../ItemsTable';
import SpinnerTable from '../SpinnerTable';
import HeaderTable from '../HeaderTable';
import FigurServis from '../../service';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            smallData: [],
            maxSize: 10,
            sort: {
                id: 0,
                firstName : 0,
                lastName : 0,
                phone : 0,
                email : 0
            }
        }
        this.getSmalData();
    }

    figur = new FigurServis();

    getSmalData() {
        this.figur.getSmalData(this.state.maxSize).
            then(body =>
                this.setState({ smallData: body })
            ).catch(
                err => { console.log(`Could not fetch ${err}`) }
            );
    }
    sortdata(e) {
        const indicator = e.target.getAttribute('value');
        console.log(indicator);
        const data = this.state.smallData;
        const sortdata = this.state.sort;
        if (this.state.sort[indicator] == 0) {
            sortdata[indicator] = 1
            data.sort((a, b) => a[indicator] > b[indicator] ? 1 : -1);
            this.setState({ smallData: data, sort : sortdata});
        } else {
            data.sort((a, b) => a[indicator] < b[indicator] ? 1 : -1);
            sortdata[indicator] = 0
            this.setState({ smallData: data , sort : sortdata});
        }



    }
    render() {
        this.figur.getStatus();
        console.log(this.state.sort)
        return (
            <div className="my-4 mx-auto w-75">
                <h1 className="text-center">Table</h1>
                <table className="table table-dark mx-auto">
                    {this.state.smallData.length > 0 ? <HeaderTable sortdata={e => this.sortdata(e)} sortStatus={this.state.sort}/> : <SpinnerTable/>}
                    {this.state.smallData.length > 0 ? <ItemsTable smallData={this.state.smallData} /> : <SpinnerTable />}
                </table>
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn-lg btn-success" value="phone" onClick={e => this.sortdata(e)}>Id</button>
                </div>
            </div>
        )
    }
}