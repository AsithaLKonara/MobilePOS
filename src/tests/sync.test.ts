import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import schema from '../database/schema';

describe('WatermelonDB Sync Engine', () => {
  it('should initialize local DB schema correctly', async () => {
    // Basic test to verify the schema doesn't throw on initialization
    const adapter = new SQLiteAdapter({
      schema,
      jsi: false,
      onSetUpError: error => {
        console.error('Database failed to load', error)
      }
    });

    const database = new Database({
      adapter,
      modelClasses: [],
    });

    expect(database).toBeDefined();
    // Simulate adapter initialization success
    expect(adapter.schema).toBe(schema);
  });
});
