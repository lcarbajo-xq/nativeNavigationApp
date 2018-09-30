import React from 'react';
import {
        View,
        Text,
        Image,
        StyleSheet,
        TouchableOpacity,
      } from 'react-native';

function Suggestion (props) {
  return(
    <TouchableOpacity
      onPress={ props.onPress }
      >
      <View style={styles.container}>
        <View style={styles.left}>
          <Image
            style={styles.cover}
            source={{
              uri: props.medium_cover_image
            }}
          />
          <View style={styles.genre}>
            <Text style={styles.genreText}>{props.genres && props.genres[0]}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.year}>{props.year}</Text>
          <Text style={styles.rating}>Puntuación {props.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  cover: {
    height: 150,
    width:100,
    resizeMode: 'contain',
  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: '#44546b',
  },
  year: {
    backgroundColor: '#e74c3c',
    paddingVertical: 4,
    paddingHorizontal: 6,
    fontSize: 11,
    color: 'white',
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  genre: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'black'
  },
  genreText: {
    color: 'white',
    fontSize: 11,
    paddingVertical: 5,
    paddingHorizontal: 7,
  }
})

export default Suggestion;
