import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('@/assets/images/b.png')} style={styles.logo} />
      </View>
      <View style={styles.cont}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 45, fontWeight: 'bold', paddingTop: 25 }}>inscription</Text>
        </View>
        <View style={styles.inputcontainer}>
          <Text>Email</Text>
          <TextInput placeholder="email" style={styles.input} />
          <Text>mot de passe</Text>
          <TextInput placeholder="mot de passe" style={styles.input} secureTextEntry />
          <View style={styles.connecter}>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
              <Text style={styles.buttonText}>inscrire</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2837ff',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 71,
  },
  cont: {
    backgroundColor: 'white',
    borderRadius: 40,
    width: '100%',
    height: '74%',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  inputcontainer: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '65%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 14,
    backgroundColor: 'lightgray',
  },
  connecter: {
    width: '65%',
    paddingTop: 50,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 30,
    paddingVertical: 10, 
    alignItems: 'center', 
  },
  buttonText: {
    color: 'white', 
    fontWeight: 'bold',
  },
});
