import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleSearch} from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
    }

    onSubmit(event) {
        event.preventDefault();
        const searchTerm = this.state.searchTerm;
        console.log(searchTerm);

        this.props.handleSearch(searchTerm);

        this.setState({searchTerm: ''});
    }

    onInputChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}
                  className="form-group">
                <input onChange={this.onInputChange}
                       value={this.state.searchTerm}
                       placeholder="Search"/>
                <input value="Submit"
                       type="submit"/>
            </form>
        );
    }
}

function mapActionToProps(dispatch) {
    return bindActionCreators({handleSearch}, dispatch);
}

export default connect(null, mapActionToProps)(SearchBar);