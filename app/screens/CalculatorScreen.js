// app/screens/CalculatorScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function CalculatorScreen() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  return (
    <View style={{ padding: 20 }}>
      <TextInput keyboardType="numeric" placeholder="Número 1" onChangeText={setNum1} style={{ borderWidth: 1, marginBottom: 10 }} />
      <TextInput keyboardType="numeric" placeholder="Número 2" onChangeText={setNum2} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title="Sumar" onPress={() => setResult(parseFloat(num1) + parseFloat(num2))} />
      {result !== null && <Text style={{ marginTop: 20 }}>Resultado: {result}</Text>}
    </View>
  );
}
