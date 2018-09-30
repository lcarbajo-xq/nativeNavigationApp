import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';

class Profile extends Component {
  componentDidMount(){
    this.focus = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('white');
    })
  }
  componentWillUnmount() {
    this.focus.remove();
  }
  handleLogOut = () => {
    this.props.dispatch({
      type: 'REMOVE_USER',
    })
    this.props.navigation.navigate('Login');
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{ this.props.user ? this.props.user.username : 'Not Username Available' }</Text>
        <Button
          title="Cerrar sesión"
          color="#e74c3c"x  
          onPress={ this.handleLogOut }
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

function mapStateToProps (state, props) {
  return {
    user: state.userLogin
  }
}


export default connect(mapStateToProps)(Profile);