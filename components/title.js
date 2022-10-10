import React from 'react';
import { Text, View, StyleSheet  } from 'react-native';

 export default function Title(){
 return (
    <View>
      <Text style={styles.title}> Our Products</Text>
    </View>
  );

}
const styles = StyleSheet.create({
title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 30,
    padding: 10
  },
});
