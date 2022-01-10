import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  message: string = "Hello, I am an angular component created using angular-cli.";
  ngOnInit(): void {
  }

  getHeading(): string {
    return "Component One";
  }

}
