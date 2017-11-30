import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = ({ text }) => {
  return (
    <View style={styles.underline}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  underline: {
    borderBottomColor: '#EB5757',
    borderBottomWidth: 3,
    alignSelf: 'center',
    marginTop: 20
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  }
});

export default Title;
