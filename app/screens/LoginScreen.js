// app/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput placeholder="Usuario" style={styles.input} onChangeText={setUser} />
      <TextInput placeholder="Contraseña" secureTextEntry style={styles.input} onChangeText={setPass} />
      <Button title="Ingresar" onPress={() => navigation.replace('Dashboard')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
});
