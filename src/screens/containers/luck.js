import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Searcher from '../../sections/containers/searcher';

class Luck extends Component {
  componentDidMount(){
    this.focus = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('white');
    })
  }
  componentWillUnmount() {
    this.focus.remove();
}
  render() {
    return (
      <View style={styles.container}>
        <Text>🍀</Text>
        <Searcher />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Luck;