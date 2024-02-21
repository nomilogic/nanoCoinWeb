import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-four-content',
  templateUrl: './section-four-content.component.html',
  styleUrls: ['./section-four-content.component.scss'],
})
export class SectionFourContentComponent implements OnInit {
  faqList = [
    {
      question: `What does Deed do ?`,
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel nibh eget velit, pretium sollicitudin. Ornare libero etiam leo dui, malesuada ipsum. Vitae purus diam neque risus augue lectus nisl suscipit. Condimentum quam et diam convallis libero ac. Tellus erat sit sed ullamcorper eleifend risus, faucibus scelerisque quis. Magna volutpat tempor pellentesque condimentum ultrices dui. Cursus morbi ullamcorper imperdiet dictum fermentum, est elementum. Nunc porttitor cursus elementum aliquet pretium in commodo.`,
    },
    {
      question: `Where does my money go to ?`,
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel nibh eget velit, pretium sollicitudin. Ornare libero etiam leo dui, malesuada ipsum. Vitae purus diam neque risus augue lectus nisl suscipit. Condimentum quam et diam convallis libero ac. Tellus erat sit sed ullamcorper eleifend risus, faucibus scelerisque quis. Magna volutpat tempor pellentesque condimentum ultrices dui. Cursus morbi ullamcorper imperdiet dictum fermentum, est elementum. Nunc porttitor cursus elementum aliquet pretium in commodo.`,
    },
    {
      question: `What is a Deed Carbon Removal Tonne ?`,
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel nibh eget velit, pretium sollicitudin. Ornare libero etiam leo dui, malesuada ipsum. Vitae purus diam neque risus augue lectus nisl suscipit. Condimentum quam et diam convallis libero ac. Tellus erat sit sed ullamcorper eleifend risus, faucibus scelerisque quis. Magna volutpat tempor pellentesque condimentum ultrices dui. Cursus morbi ullamcorper imperdiet dictum fermentum, est elementum. Nunc porttitor cursus elementum aliquet pretium in commodo.`,
    },
    {
      question: `Why is carbon removal necessary to stop climate change? Isn't carbon
      reduction enough ?`,
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel nibh eget velit, pretium sollicitudin. Ornare libero etiam leo dui, malesuada ipsum. Vitae purus diam neque risus augue lectus nisl suscipit. Condimentum quam et diam convallis libero ac. Tellus erat sit sed ullamcorper eleifend risus, faucibus scelerisque quis. Magna volutpat tempor pellentesque condimentum ultrices dui. Cursus morbi ullamcorper imperdiet dictum fermentum, est elementum. Nunc porttitor cursus elementum aliquet pretium in commodo.`,
    },
    {
      question: `How is Deed different from other voluntary carbon offset registries and
      how does it work?`,
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel nibh eget velit, pretium sollicitudin. Ornare libero etiam leo dui, malesuada ipsum. Vitae purus diam neque risus augue lectus nisl suscipit. Condimentum quam et diam convallis libero ac. Tellus erat sit sed ullamcorper eleifend risus, faucibus scelerisque quis. Magna volutpat tempor pellentesque condimentum ultrices dui. Cursus morbi ullamcorper imperdiet dictum fermentum, est elementum. Nunc porttitor cursus elementum aliquet pretium in commodo.`,
    },
    {
      question: `How can I get involved with Deed?`,
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel nibh eget velit, pretium sollicitudin. Ornare libero etiam leo dui, malesuada ipsum. Vitae purus diam neque risus augue lectus nisl suscipit. Condimentum quam et diam convallis libero ac. Tellus erat sit sed ullamcorper eleifend risus, faucibus scelerisque quis. Magna volutpat tempor pellentesque condimentum ultrices dui. Cursus morbi ullamcorper imperdiet dictum fermentum, est elementum. Nunc porttitor cursus elementum aliquet pretium in commodo.`,
    },
  ];
  contactLinks = [
    {
      imagePath: '../../../assets/images/facebook.svg',
      address: '#',
    },
    {
      imagePath: '../../../assets/images/twitter.svg',
      address: '#',
    },
    {
      imagePath: '../../../assets/images/youtube.svg',
      address: '#',
    },
    {
      imagePath: '../../../assets/images/instagram.svg',
      address: '#',
    },
    {
      imagePath: '../../../assets/images/linkedin.svg',
      address: '#',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
