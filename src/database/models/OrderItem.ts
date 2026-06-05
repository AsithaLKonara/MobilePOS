import { Model } from '@nozbe/watermelondb';
import { field, relation, readonly, date } from '@nozbe/watermelondb/decorators';
import Order from './Order';
import Product from './Product';

export default class OrderItem extends Model {
  static table = 'order_items';
  static associations = {
    orders: { type: 'belongs_to', key: 'order_id' },
    products: { type: 'belongs_to', key: 'product_id' },
  } as const;

  @field('quantity') quantity!: number;
  @field('unit_price') unitPrice!: number;
  @field('subtotal') subtotal!: number;

  @relation('orders', 'order_id') order!: import('@nozbe/watermelondb').Relation<Order>;
  @relation('products', 'product_id') product!: import('@nozbe/watermelondb').Relation<Product>;

  @readonly @date('created_at') createdAt!: Date;
  @readonly @date('updated_at') updatedAt!: Date;
}
