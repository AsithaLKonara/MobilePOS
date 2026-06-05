import { Model } from '@nozbe/watermelondb';
import { field, readonly, date, children } from '@nozbe/watermelondb/decorators';

export default class Order extends Model {
  static table = 'orders';
  static associations = {
    order_items: { type: 'has_many', foreignKey: 'order_id' },
  } as const;

  @field('order_number') orderNumber!: string;
  @field('total_amount') totalAmount!: number;
  @field('status') status!: string;
  @field('payment_method') paymentMethod!: string;
  @field('synced_to_backend') syncedToBackend!: boolean;

  @children('order_items') orderItems!: any;

  @readonly @date('created_at') createdAt!: Date;
  @readonly @date('updated_at') updatedAt!: Date;
}
