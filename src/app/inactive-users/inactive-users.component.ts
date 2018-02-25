import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from '../users.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];
  // currentCount = this.counter.count;
  @Output() userSetToActive = new EventEmitter<number>();

  constructor(private usersService: UsersService) {};

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }
  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    // this.usersService.userSetToActive.emit
    this.usersService.userToActive(id);
    // console.log(this.counter.count++);
    // console.log(this.counter.count++);
    // alert('current switch number is ' + this.counter.count);
  }
}
