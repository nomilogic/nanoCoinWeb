import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  links = [
    {
      text: 'Businesses',
    },
    {
      text: 'NFTs & Crypto',
    },
    {
      text: 'Growers',
    },
    {
      text: 'Community',
    },
    {
      text: 'Resources',
    },
    {
      text: 'Company',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
