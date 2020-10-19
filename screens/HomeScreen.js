import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <TouchableOpacity
        onPress={() => {}}
        style={styles.logoutButton}
      >
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 28,
    marginBottom: 20
  },
  logoutButton: {
    padding: 10
  }
})

export default HomeScreen