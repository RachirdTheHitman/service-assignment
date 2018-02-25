import {EventEmitter, Injectable, Output} from '@angular/core';
import {CounterService} from './counter.service';

@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  // userSetToInactive = new EventEmitter<number>();
  // userSetToActive = new EventEmitter<number>();

  constructor(private counterService: CounterService) {}

  userToActive(id: number) {
    // this.userSetToActive.emit(id);
    // this.usersService.userSetToActive.emit
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    console.log(this.counterService.count++);
  }

  userToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    console.log(this.counterService.count++);
  }

}
