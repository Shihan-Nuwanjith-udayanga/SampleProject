import React from 'react';
import {View, TouchableWithoutFeedback, StyleSheet} from 'react-native';

import colors from '../config/colors.js';

function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}></View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListItemDeleteAction;
