import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogRegService {

  constructor(
    
  ) { }
   // Save user data to localStorage
   saveUser(userData: { email: string,name: string, password: string}): void {
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  // Get user data from localStorage
  getUser(): { email: string, password: string } | null {
    const storedData = localStorage.getItem('userData');
    return storedData ? JSON.parse(storedData) : null;
  }
}
