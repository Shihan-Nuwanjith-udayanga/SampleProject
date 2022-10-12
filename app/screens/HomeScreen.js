import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Card from '../components/Card';

function HomeScreen() {
  return (
    <View
      style={{
        backgroundColor: '#f8f4f4',
        padding: 20,
        paddingTop: 100,
      }}>
      <Card
        title="Red Jacket for sale"
        subTitle="$100"
        image={require("../assets/jacket.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
