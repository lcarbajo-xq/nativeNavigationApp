import React from 'react';
import {
        TouchableHighlight,
        TouchableOpacity,
        TouchableWithouFeedback,
        View,
        Text,
        StyleSheet
        } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

function FullSreen (props) {
  return(
    <TouchableHighlight
      onPress={props.isFullScreen}
      style={styles.container}
      underlayColor='yellow'
      hitSlop={{
        left:  5,
        top: 5,
        bottom: 5,
        right: 5,
      }}>
      <View>
        <Text>FS</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginLeft: 10,
    height: 25,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'gray',
  }
})

export default FullSreen;
