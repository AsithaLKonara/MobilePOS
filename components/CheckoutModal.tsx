import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

interface Props {
  visible: boolean;
  total: number;
  onClose: () => void;
  onPay: (method: 'CASH' | 'CARD') => void;
}

export default function CheckoutModal({ visible, total, onClose, onPay }: Props) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Checkout</Text>
          <Text style={styles.totalAmount}>Amount Due: ${total.toFixed(2)}</Text>
          
          <View style={styles.methodsContainer}>
            <TouchableOpacity 
              style={[styles.methodBtn, styles.cashBtn]} 
              onPress={() => onPay('CASH')}
            >
              <Text style={styles.methodBtnText}>Cash</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.methodBtn, styles.cardBtn]} 
              onPress={() => onPay('CARD')}
            >
              <Text style={styles.methodBtnText}>Credit Card</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
            <Text style={styles.cancelBtnText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 400,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 10,
  },
  totalAmount: {
    fontSize: 20,
    color: '#334155',
    marginBottom: 30,
  },
  methodsContainer: {
    flexDirection: 'row',
    gap: 20,
    width: '100%',
    marginBottom: 20,
  },
  methodBtn: {
    flex: 1,
    height: 80,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cashBtn: {
    backgroundColor: '#22c55e', // green for cash
  },
  cardBtn: {
    backgroundColor: '#3b82f6', // blue for card
  },
  methodBtnText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelBtn: {
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  cancelBtnText: {
    color: '#64748b',
    fontSize: 16,
    fontWeight: '600',
  },
});
