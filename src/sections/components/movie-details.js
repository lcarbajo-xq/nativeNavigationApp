import React from 'react';
import {
        View,
        Text,
        StyleSheet,
        Image,
        WebView,
        ScrollView,s
        } from 'react-native';
import { connect } from 'react-redux';

const makeHTML = (id) => {
    
    return (`
        <style>
            .video {
                position: relative;
                padding-bottom: 56.25%;
            }
            iframe {
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
            }
        </style>
        <div class="video_trailer">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
    `)
    
}

function MovieDetails (props){
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.left}>
                    {/* <Image
                        style={styles.cover}
                        source={{
                            uri: props.movie.medium_cover_image
                        }}
                    /> */}
                    <View style={styles.genre}>
                        <Text style={styles.genreText}>2001</Text>
                    </View>
                </View>
                <View style={styles.details}>
                    <Text style={styles.title}>Titulo</Text>
                    <ScrollView style={styles.synopsis}>
                        <Text style={ styles.synopsis_text }>Synopsis</Text>
                    </ScrollView>
                </View>
            </View>
            {/* <View style={ styles.trailer }>
                <WebView source={{html: makeHTML(props.movie.yt_trailer_code) }}/>
            </View> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 15,
      flexDirection:'row',
      backgroundColor: 'blue',
    },

    cover: {
      height: 150,
      width:100,
      resizeMode: 'contain',
    },
    details: {
    flex: 1,
      paddingHorizontal: 10,
      justifyContent: 'space-between',
    },
    title: {
      backgroundColor: '#ff7675',
      borderRadius: 10,   
      fontSize: 14,
      color: '#44546b',
      textAlign: 'left',
      marginLeft: 2,
      padding: 10,
    },
    synopsis: {
        flex: 1,
        marginTop: 5,
        backgroundColor: '#cf6a87',
        borderRadius: 10,
    },
    synopsis_text: {
        textAlign: 'left',
        padding: 10,
        color: '#f7f1e3',
    },
    trailer: {
        height: 315,
    }
  })

//   function mapStateToProps (state) {
//       console.log(state.body.selectedMovie);
//       return {
//           movie: state.body.selectedMovie
//       }
//   }

export default connect(null)(MovieDetails);