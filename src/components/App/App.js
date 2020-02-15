import React, { Component } from 'react';
import ItemsTable from '../ItemsTable';
import SpinnerTable from '../SpinnerTable';
import HeaderTable from '../HeaderTable';
import Paginator from '../Paginator';
import FiltterTable from '../FiltterTable';
import FigurServis from '../../service';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Data: [],
            maxSize: 1000,
            paginator: {
                step: 20,
                startPoint: 0,
                endPoint: 20,
                paginatorPoint: 2,
                paginatorPointEnd: 0,
                currentPoint: 1
            },
            sort: {
                id: 0,
                firstName: 0,
                lastName: 0,
                phone: 0,
                email: 0
            },
            filter : {
                id : '',
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            },
            productData: []
        }
        this.getData();
    }

    figur = new FigurServis();

    getData() {
        this.figur.getData(this.state.maxSize).
            then(body =>
                this.getStateData(body)
            ).catch(
                err => { console.log(`Could not fetch ${err}`) }
            );
    }

    getStateData(data) {
        this.setState({ Data: data });
        this.getProductData(data);
        // this.createPasginator(data);
    }



    getProductData(data) {
        const filterProductData = data.filter((e) => 
            (e.id+'').toLowerCase().includes(this.state.filter.id.toLowerCase())
            && (e.firstName+'').toLowerCase().includes(this.state.filter.firstName.toLowerCase())
            && (e.lastName+'').toLowerCase().includes(this.state.filter.lastName.toLowerCase())
            && (e.phone+'').toLowerCase().includes(this.state.filter.phone.toLowerCase())
            && (e.email+'').toLowerCase().includes(this.state.filter.email.toLowerCase())
        );
        const productData = filterProductData.filter((e, key) => key >= this.state.paginator.startPoint && key < this.state.paginator.endPoint);
        this.setState({ productData: productData });
        this.createPasginator(filterProductData);
    }

    createPasginator(data) {
        const paginator = this.state.paginator;
        paginator.paginatorPointEnd = Math.ceil((data.length / paginator.step));
        this.setState({ paginator: paginator });
    }

    changePaginator(e) {
        const target = parseInt(e.target.getAttribute('value'));
        const paginator = this.state.paginator;
        if (target > 2 || target < paginator.paginatorPointEnd) {
            paginator.startPoint = paginator.step * target;
            paginator.endPoint = paginator.step * target + paginator.step;
            paginator.paginatorPoint = target;
            paginator.currentPoint = target;
        };
        if (target == 2) {
            paginator.startPoint = paginator.step;
            paginator.endPoint = paginator.step*2;
            paginator.paginatorPoint = 2;
            paginator.currentPoint = 2;
        };
        if (target < 2) {
            paginator.startPoint = 0;
            paginator.endPoint = paginator.step;
            paginator.paginatorPoint = 2;
            paginator.currentPoint = 1;
        };
        if (target == paginator.paginatorPointEnd) {
            paginator.startPoint = paginator.paginatorPointEnd - paginator.step;
            paginator.endPoint = paginator.paginatorPointEnd;
            paginator.paginatorPoint = paginator.paginatorPointEnd - 1;
            paginator.currentPoint = paginator.paginatorPointEnd;
        };
        this.setState({ paginator: paginator });
        this.getProductData(this.state.Data);
    }

    applyFilter(filter){
        console.log(filter)
    }

    sortdata(e) {
        const indicator = e.target.getAttribute('value');
        const data = this.state.Data;
        const sortdata = this.state.sort;
        if (this.state.sort[indicator] == 0) {
            sortdata[indicator] = 1
            data.sort((a, b) => a[indicator] > b[indicator] ? 1 : -1);
            this.setState({ Data: data, sort: sortdata });
            this.getProductData(data);
        } else {
            data.sort((a, b) => a[indicator] < b[indicator] ? 1 : -1);
            sortdata[indicator] = 0
            this.setState({ Data: data, sort: sortdata });
            this.getProductData(data);
        }
    }

    render() {
        return (
            <div className="my-4 mx-auto w-75">
                <h1 className="text-center">Table</h1>
                {this.state.Data.length > 0 ? <FiltterTable applyFilter={e => this.applyFilter(fiter)}/> : ''}
                <table className="table table-dark">
                    {this.state.Data.length > 0 ? <HeaderTable sortdata={e => this.sortdata(e)} sortStatus={this.state.sort} /> : <SpinnerTable />}
                    {this.state.Data.length > 0 ? <ItemsTable Data={this.state.productData} /> : <SpinnerTable />}
                </table>
                {this.state.Data.length > 0 ? <Paginator paginator={this.state.paginator} changePaginator={e => this.changePaginator(e)} /> : ''}
            </div>
        )
    }
}