import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-carousel-item',
  templateUrl: './big-carousel-item.component.html',
  styleUrls: ['./big-carousel-item.component.scss'],
})
export class BigCarouselItemComponent implements OnInit {
  @Input() price = 20;
  @Input() personName = 'Joe Wahlgren';
  @Input() location = 'NE, USA 240 acres';
  @Input() personProfileLink = '#';
  @Input() title = 'Buy Carbon Removals Directly From Farmers';
  @Input()
  description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget
  tortor fusce dolor vitae tellus imperdiet.`;
  @Input() imagePath = '../../../../assets/images/grass-some.png';

  constructor() {}

  ngOnInit(): void {}
}
