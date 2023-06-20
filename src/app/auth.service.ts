import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError, switchMap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = '../assets/users.json';
  private usersKey = 'users';

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<any> {
    return this.getStoredUsers().pipe(
      map(storedUsers => {
        const existingUser = storedUsers.find(u => u.email === user.email);
        if (existingUser) {
          throw new Error('User with the same email already exists.');
        }

        const updatedUsers = [...storedUsers, user];
        this.storeUsers(updatedUsers);

        return { success: true, message: 'Registration successful.' };
      })
    );
  }

  private getStoredUsers(): Observable<User[]> {
    const storedData = localStorage.getItem(this.usersKey);
    const storedUsers = storedData ? JSON.parse(storedData) : [];
    return of(storedUsers);
  }

  private storeUsers(users: User[]): void {
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }
  

  loginUser(credentials: any): Observable<any> {
    return this.http.get<any[]>(this.usersUrl).pipe(
      map(users => {
        if (!Array.isArray(users)) {
          throw new Error('Invalid user data.');
        }
  
        const matchedUser = users.find((user: any) => user.email === credentials.email && user.password === credentials.password);
        if (matchedUser) {
          return { success: true, message: 'Login successful' };
        } else {
          throw new Error('Invalid email or password');
        }
      })
    );
  }
  
}
