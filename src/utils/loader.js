import React from 'react';
import {
        View,
        StyleSheet,
        ActivityIndicator,
        Image
        }  from 'react-native';

 function Loader (props) {
     return (
        <View style={ styles.container }>
            <Image 
               source={require('../../assets/Recurso_1.png')}
               style={ styles.logo }
               />
               <ActivityIndicator />
        </View>
     )
 }

 const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginBottom: 10,
        width: 200,
        height: 80,
        resizeMode: 'contain',
    }
 })

 export default Loader;