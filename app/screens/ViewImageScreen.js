import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

import colors from '../config/colors.js';
import AppText from '../components/AppText.js';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
      </View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/chair.jpg')}
      />
      {/* <AppText> Hello How Are You</AppText> */}
      {/* <MaterialCommunityIcons name="email" size={60} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  closeIcon: {
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 40,
    left: 30,
  },

  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 40,
    right: 30,
  },
});

export default ViewImageScreen;
