import React from 'react';
import {ImageBackground, StyleSheet, View , Image, Text} from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/academic_logo.jpg')}></Image>
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.RegisterButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  logo: {
    width: 100,
    height: 100,
  },

  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },

  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },

  RegisterButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
  },
});

export default WelcomeScreen;
