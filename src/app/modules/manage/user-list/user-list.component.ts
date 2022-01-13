import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  users: User[] = this.sharedService.users;
  selectedUser: User = {} as User;
  toPreview: Boolean = false;

  preview(user: User) {
    this.selectedUser = user;
    this.toPreview = true;
    this.sharedService.toPreview = this.toPreview;
    console.log(this.toPreview, this.selectedUser);
  }

  getStyle(user: User): string {
    if (!user.isDeleted) {
      return 'active';
    }
    return 'deleted';
  }
}
