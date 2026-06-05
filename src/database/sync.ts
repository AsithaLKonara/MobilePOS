import { synchronize } from '@nozbe/watermelondb/sync';
import { database } from './index';

export async function sync() {
  await synchronize({
    database,
    pullChanges: async ({ lastPulledAt }) => {
      // Stub: fetch data from the backend
      const response = await fetch(`http://localhost:5000/api/v1/sync/pull?last_pulled_at=${lastPulledAt || 0}`);
      if (!response.ok) {
        throw new Error(await response.text());
      }
      const { changes, timestamp } = await response.json();
      return { changes, timestamp };
    },
    pushChanges: async ({ changes, lastPulledAt }) => {
      // Stub: push offline changes to the backend
      const response = await fetch(`http://localhost:5000/api/v1/sync/push?last_pulled_at=${lastPulledAt || 0}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ changes }),
      });
      if (!response.ok) {
        throw new Error(await response.text());
      }
    },
    migrationsEnabledAtVersion: 1,
  });
}
