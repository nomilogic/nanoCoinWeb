import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-three-content',
  templateUrl: './section-three-content.component.html',
  styleUrls: ['./section-three-content.component.scss'],
})
export class SectionThreeContentComponent implements OnInit {
  deedItemList = [
    {
      imagePath: '../../assets/images/tracter.svg',
      title: '1. Farmers Remove Carbon',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget tortor fusce dolor vitae tellus imperdiet.',
      buttonText: 'Enroll your farm',
    },
    {
      imagePath: '../../assets/images/stats.svg',
      title: '2. Verifiers Audit Carbon Removal',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget tortor fusce dolor vitae tellus imperdiet.',
      buttonText: 'Apply to be a verifier',
    },
    {
      imagePath: '../../assets/images/medal.svg',
      title: '3. Buyers Pay for Removals',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget tortor fusce dolor vitae tellus imperdiet.',
      buttonText: 'Buy carbon removals',
    },
  ];
  carbonItemList = [
    {
      imagePath: '../../assets/images/airplane-ticket.svg',
      title: 'Travel',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget tortor fusce dolor vitae tellus imperdiet.',
    },
    {
      imagePath: '../../assets/images/calender-ticket.svg',
      title: 'Monthly',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget tortor fusce dolor vitae tellus imperdiet.',
    },
    {
      imagePath: '../../assets/images/stock-ticket.svg',
      title: 'Yearly',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget tortor fusce dolor vitae tellus imperdiet.',
    },
    {
      imagePath: '../../assets/images/building-ticket.svg',
      title: 'Business',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget tortor fusce dolor vitae tellus imperdiet.',
    },
    {
      imagePath: '../../assets/images/earth-ticket.svg',
      title: 'Custom',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget tortor fusce dolor vitae tellus imperdiet.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
