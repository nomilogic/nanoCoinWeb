import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carbon-item',
  templateUrl: './carbon-item.component.html',
  styleUrls: ['./carbon-item.component.scss'],
})
export class CarbonItemComponent implements OnInit {
  @Input() imagePath = '';
  @Input() title = '';
  @Input() subtitle = '';
  constructor() {}

  ngOnInit(): void {}
}
