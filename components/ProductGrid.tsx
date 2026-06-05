import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// Dummy data for now until we wire up withWatermelonDB
const DUMMY_PRODUCTS = [
  { id: '1', name: 'Coffee', price: 3.50 },
  { id: '2', name: 'Tea', price: 2.50 },
  { id: '3', name: 'Sandwich', price: 6.00 },
  { id: '4', name: 'Pastry', price: 4.00 },
  { id: '5', name: 'Salad', price: 8.50 },
  { id: '6', name: 'Juice', price: 4.50 },
];

interface Props {
  onAddProduct: (product: any) => void;
}

export default function ProductGrid({ onAddProduct }: Props) {
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.card} onPress={() => onAddProduct(item)}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={DUMMY_PRODUCTS}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={3}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'flex-start',
    gap: 15,
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 8,
    width: '31%', // roughly 3 columns
    borderWidth: 1,
    borderColor: '#e2e8f0',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  price: {
    fontSize: 14,
    color: '#64748b',
  },
});
