import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class LoginStatusService {
  private lastLoggedInUser: Usuario | null = null;

  setLastLoggedInUser(user: Usuario) {
    this.lastLoggedInUser = user;
  }

  getLastLoggedInUser(): Usuario | null {
    return this.lastLoggedInUser;
  }
}
