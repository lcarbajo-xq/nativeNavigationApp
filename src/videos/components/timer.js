import React from 'react';
import {
        View,
        Text,
        StyleSheet
        } from 'react-native';

function Timer (props) {
  return(
    <View style={styles.container}>
      <Text style={styles.timer}>{props.actualTime}</Text>
      <Text style={styles.timer}>/</Text>
      <Text style={styles.timer}>{props.totalTime}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  timer: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginLeft: 10,
    height: 25,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'gray',
  }
})

export default Timer;
