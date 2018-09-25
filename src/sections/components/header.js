import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

function Header(props){
  return(
    <View>
      <SafeAreaView>
        <View style={styles.container}>
            <Image
                source={require('../../../assets/Recurso_1.png')}
                style={styles.logo}
            />
            <View style={styles.right}>
              {props.children}
            </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 34,
    resizeMode: 'contain',
  },
  container: {
    padding: 5,
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'blue',
  }
})


export default Header;
