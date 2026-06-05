import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import schema from './schema';
import Product from './models/Product';
import Order from './models/Order';
import OrderItem from './models/OrderItem';

// In Expo/React Native, jsi allows faster SQLite operations
const adapter = new SQLiteAdapter({
  schema,
  jsi: true,
  onSetUpError: error => {
    console.error('WatermelonDB Setup Error', error);
  }
});

export const database = new Database({
  adapter,
  modelClasses: [
    Product,
    Order,
    OrderItem,
  ],
});
