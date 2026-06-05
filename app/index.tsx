import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import ProductGrid from '../components/ProductGrid';
import CartPanel from '../components/CartPanel';
import CheckoutModal from '../components/CheckoutModal';

export default function POSDashboard() {
  const [cart, setCart] = useState<any[]>([]);
  const [isCheckoutVisible, setCheckoutVisible] = useState(false);

  const handleAddProduct = (product: any) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleClearCart = () => setCart([]);

  const handlePay = (method: 'CASH' | 'CARD') => {
    // Here we would typically save the order to WatermelonDB locally
    Alert.alert('Payment Successful', `Paid via ${method}. The order has been saved offline and will sync when connected.`);
    setCart([]);
    setCheckoutVisible(false);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal * 1.1; // adding 10% tax

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sidebar}>
        <Text style={styles.sidebarTitle}>Facade POS</Text>
      </View>
      
      <View style={styles.mainContent}>
        <View style={styles.productSection}>
          <Text style={styles.sectionTitle}>Products</Text>
          <ProductGrid onAddProduct={handleAddProduct} />
        </View>
        
        <View style={styles.cartSection}>
          <Text style={styles.sectionTitle}>Current Ticket</Text>
          <CartPanel 
            cart={cart} 
            onClear={handleClearCart} 
            onCheckout={() => setCheckoutVisible(true)} 
          />
        </View>
      </View>

      <CheckoutModal
        visible={isCheckoutVisible}
        total={total}
        onClose={() => setCheckoutVisible(false)}
        onPay={handlePay}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f8fafc',
  },
  sidebar: {
    width: 80,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    paddingTop: 20,
  },
  sidebarTitle: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainContent: {
    flex: 1,
    flexDirection: 'row',
  },
  productSection: {
    flex: 2,
    padding: 20,
  },
  cartSection: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderLeftWidth: 1,
    borderLeftColor: '#e2e8f0',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 20,
  },
});
