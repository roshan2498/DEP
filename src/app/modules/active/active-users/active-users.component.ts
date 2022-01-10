import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  users: User[] = this.sharedService.users;
  ngOnInit(): void {
  }

  changeStatus(user: User) {
    this.sharedService.changeStatus(user);
  }
}
