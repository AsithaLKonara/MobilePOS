import { Model } from '@nozbe/watermelondb';
import { field, readonly, date } from '@nozbe/watermelondb/decorators';

export default class Product extends Model {
  static table = 'products';

  @field('name') name!: string;
  @field('price') price!: number;
  @field('sku') sku?: string;
  @field('backend_id') backendId!: string;

  @readonly @date('created_at') createdAt!: Date;
  @readonly @date('updated_at') updatedAt!: Date;
}
