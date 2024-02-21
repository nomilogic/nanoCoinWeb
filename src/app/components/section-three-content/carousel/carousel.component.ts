import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @ViewChild('dragAndScrollRef', { read: DragScrollComponent })
  ds!: DragScrollComponent;

  logoList = [
    {
      imagePath: '../../../assets/images/skrill-logo.svg',
    },
    {
      imagePath: '../../../assets/images/vimeo-logo.svg',
    },
    {
      imagePath: '../../../assets/images/nbc-logo.svg',
    },
    {
      imagePath: '../../../assets/images/fox-logo.svg',
    },
    {
      imagePath: '../../../assets/images/cbs-logo.svg',
    },
    {
      imagePath: '../../../assets/images/skrill-logo.svg',
    },
    {
      imagePath: '../../../assets/images/skrill-logo.svg',
    },
    {
      imagePath: '../../../assets/images/skrill-logo.svg',
    },
    {
      imagePath: '../../../assets/images/skrill-logo.svg',
    },
    {
      imagePath: '../../../assets/images/skrill-logo.svg',
    },
    {
      imagePath: '../../../assets/images/skrill-logo.svg',
    },
    {
      imagePath: '../../../assets/images/skrill-logo.svg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  moveLeft() {
    if (this.ds.currIndex <= 0) return;
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }
}
