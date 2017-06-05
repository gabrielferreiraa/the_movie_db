'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeValue} from './fieldActions';

class App extends Component {
    render() {
        return (
            <div>
                <h2>{ this.props.value }</h2>
                <input type="text" onChange={this.props.changeValue} value={ this.props.value }/>
            </div>
        );
    };
}

const mapStateToProps = state => ({value: state.app.value});
const mapDispatchToProps = dispatch => bindActionCreators({changeValue}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App)
