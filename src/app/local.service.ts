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


  
  // Add an item to an existing array in localStorage
  addItemToArray(key: string, newItem: any): void {
    const existingDataString = localStorage.getItem(key);
    let existingArray: any[] = existingDataString ? JSON.parse(existingDataString) : [];

    if (!Array.isArray(existingArray)) {
      existingArray = [];
    }

    existingArray.push(newItem);
    localStorage.setItem(key, JSON.stringify(existingArray));
    console.log('Item added successfully:', existingArray);
  }

  // Remove an item from an array in localStorage by a unique identifier
  removeItemFromArray(key: string, itemId: any, identifier: string): void {
    const existingDataString = localStorage.getItem(key);
    if (existingDataString) {
      let existingArray = JSON.parse(existingDataString);

      if (Array.isArray(existingArray)) {
        // Filter out the item with the specified identifier
        existingArray = existingArray.filter(item => item[identifier] !== itemId);
        
        localStorage.setItem(key, JSON.stringify(existingArray));
        console.log('Item removed successfully:', existingArray);
      }
    }
  }


  
}
