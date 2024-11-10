import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  updateItem(key: string, updateFn: (currentValue: any) => any): void {
    const currentValue = this.getItem(key);
    if (currentValue !== null) {
      const updatedValue = updateFn(currentValue);
      this.setItem(key, updatedValue);
    }
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
