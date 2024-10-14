// indexed-db.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexedDbService {
  private dbName = 'ai-db';
  private dbVersion = 1;
  private storeName = 'items';

  private db: IDBDatabase | null = null;

  constructor() {
    this.initDb();
  }

  private initDb(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);

      request.onerror = () => reject('Error opening database');

      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        this.db = (event.target as IDBOpenDBRequest).result;
        this.db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
      };
    });
  }

  async addItem(item: any): Promise<number> {
    await this.initDb();
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.add(item);

      request.onerror = () => reject('Error adding item');
      request.onsuccess = () => resolve(request.result as number);
    });
  }

  async getAllItems(): Promise<any[]> {
    await this.initDb();
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(this.storeName, 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.getAll();

      request.onerror = () => reject('Error getting items');
      request.onsuccess = () => resolve(request.result);
    });
  }

  async updateItem(id: number, updatedItem: any): Promise<void> {
    await this.initDb();
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.put({ ...updatedItem, id });

      request.onerror = () => reject('Error updating item');
      request.onsuccess = () => resolve();
    });
  }

  async deleteItem(id: number): Promise<void> {
    await this.initDb();
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.delete(id);

      request.onerror = () => reject('Error deleting item');
      request.onsuccess = () => resolve();
    });
  }
}