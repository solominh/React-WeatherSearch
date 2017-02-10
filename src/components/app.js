import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';
import Table from '../containers/table';

export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <Table />
            </div>
        );
    }
}
