import { Component, OnInit } from '@angular/core';

interface Header {
    heading: string;
    message: string;
}


@Component(
    {
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    }
)

export class HeaderComponent implements OnInit {
    constructor() {

    }

    header: Header = {
        heading: "Hello, Angular!",
        message: "Created this component manually for fun."
    }


    ngOnInit(): void {

    }
}