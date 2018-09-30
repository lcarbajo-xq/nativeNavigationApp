import React, { Component } from 'react';
import LoginLoader from '../../utils/loader';
import { connect } from 'react-redux'

class Login extends Component {
    componentDidMount (){
        if (this.props.user) {
            this.props.navigation.navigate('App')
        } else {
            this.props.navigation.navigate('Login')
        }
    }
    render () {
        return <LoginLoader />
    }
}

function mapStateToProps(state, props) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Login);