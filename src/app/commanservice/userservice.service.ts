import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  users: { Firstname: string; lastname: string; }[];
  constructor() {
    this.users = [
      {
        Firstname: 'john',
        lastname: 'doe',
      },
      {
        Firstname: 'nisha',
        lastname: 'upreti'
      },
      {
        Firstname: 'gargi',
        lastname: 'upreti'
      },
      {
        Firstname: 'rohit',
        lastname: 'upreti'
      }
    ];
  }
  getusers() {
    console.log('Fetching users from service...');
    return this.users;

  }
}

0