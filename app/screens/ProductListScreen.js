// app/screens/ProductListScreen.js
import React from 'react';
import { View, FlatList, Text } from 'react-native';

const productos = [
  { id: '1', nombre: 'Café', precio: '$100' },
  { id: '2', nombre: 'Pan', precio: '$50' },
  { id: '3', nombre: 'Leche', precio: '$80' },
];

export default function ProductListScreen() {
  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={productos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text>{item.nombre} - {item.precio}</Text>
        )}
      />
    </View>
  );
}
