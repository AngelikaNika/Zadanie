import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private state: boolean;
  user: User = new User();

  constructor() { }

getState() {
  return this.state;
}
setState(state: boolean) {
  this.state = state;
}

}
