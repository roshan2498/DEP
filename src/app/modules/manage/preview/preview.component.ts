import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Input()
  user: User;

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
  }

  getStyleClass(user: User) {
    if (user.isDeleted) {
      return 'deleted';
    }
    return 'active';
  }
}
