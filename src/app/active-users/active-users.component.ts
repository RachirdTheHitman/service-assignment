import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from '../users.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: string[];
  // currentCount = this.counter.count;
  @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private usersService: UsersService) {};

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }
  onSetToInactive(id: number) {
    this.usersService.userToInactive(id);
    // console.log(this.counter.count++);
    // console.log(this.counter.count++);

    // alert('current switch number is ' + this.counter.count++);
  }
}
