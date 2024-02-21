import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-carousel',
  templateUrl: './big-carousel.component.html',
  styleUrls: ['./big-carousel.component.scss'],
})
export class BigCarouselComponent implements OnInit {
  itemList = [
    {
      price: 20,
      personName: 'Joe Wahlgren',
      location: 'NE, USA 240 acres',
      personProfileLink: '#',
      title: 'Buy Carbon Removals Directly From Farmers',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget tortor fusce dolor vitae tellus imperdiet.`,
      imagePath: '../../../../assets/images/grass-some.png',
    },
    {
      price: 20,
      personName: 'Joe Wahlgren',
      location: 'NE, USA 240 acres',
      personProfileLink: '#',
      title: 'Buy Carbon Removals Directly From not',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget tortor fusce dolor vitae tellus imperdiet.`,
      imagePath: '../../../../assets/images/grass-some.png',
    },
    {
      price: 20,
      personName: 'Joe Wahlgren',
      location: 'NE, USA 240 acres',
      personProfileLink: '#',
      title: 'Buy Carbon Removals Directly From may',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget tortor fusce dolor vitae tellus imperdiet.`,
      imagePath: '../../../../assets/images/grass-some.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
