'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        return (
            <div>
                <h2>{ this.props.value }</h2>
                <input type="text" onChange={this.handleChange} value={ this.props.value } />
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        value: state.app.value
    }
}

export default connect(mapStateToProps)(App)
