import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deed-item',
  templateUrl: './deed-item.component.html',
  styleUrls: ['./deed-item.component.scss'],
})
export class DeedItemComponent implements OnInit {
  @Input() imagePath = '';
  @Input() title = '';
  @Input() subtitle = '';
  @Input() buttonText = '';
  constructor() {}

  ngOnInit(): void {}
}
