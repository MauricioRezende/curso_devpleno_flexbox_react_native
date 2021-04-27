import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3}>
        <View style={styles.subbox} />
        <View style={styles.subbox} />
        <View style={styles.subbox} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    // flexDirection: 'row',
    // Primeiro eixo .. Y
    justifyContent: 'center',
    // justifyContent: 'flex-start',
    // justifyContent: 'flex-end',
    // justifyContent: 'space-around',
    // justifyContent: 'space-between',
    // Segundo eixo .. X
    // alignItems: 'center',
    // alignItems: 'flex-start',
    // alignItems: 'flex-end',
    alignItems: 'stretch',
  },
  box1: {
    // padding: 40,
    flex: 1,
    backgroundColor: 'steelblue',
    margin: 4
  },
  box2: {
    flex: 2,
    backgroundColor: 'steelblue',
    margin: 4
  },
  box3: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'steelblue',
    margin: 4
  },
  subbox: {
    flex: 1,
    margin: 4,
    backgroundColor: 'yellow'
  }
})
