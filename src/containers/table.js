import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class Table extends Component {

    renderData() {
        if (!this.props.weather) {
            return;
        }
        const cityName = this.props.weather.city.name;
        console.log(cityName);

        const data = this.props.weather.list.map((weathers)=> {
            return weathers.main.temp;
        });
        return (
            <tr>
                <td>{cityName}</td>
                <td>
                    <Chart data={data}
                           color='red'/>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <td>City</td>
                    <td> Temp</td>
                </tr>
                </thead>
                <tbody>
                {this.renderData()}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(Table);