import Dexie, { Table } from 'dexie';
import dexieCloud from 'dexie-cloud-addon';
import { Friend } from './Friend';

export class AppDB extends Dexie {
  friends!: Table<Friend, number>;

  constructor() {
    super('AppDB', { addons: [dexieCloud] });
    this.version(1).stores({
      friends: '@id, name, age',
    });
    this.cloud.configure({
      databaseUrl: 'https://zne05qi8m.dexie.cloud',
      requireAuth: true,
    });
  }
}
