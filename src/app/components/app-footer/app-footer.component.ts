import { Icon } from '../../interfaces/icon.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {

  public icons: Array<Icon> = [
    {
      icon: 'facebook',
      url: 'https://www.facebook.com/AtlasQuantum/'
    }, {
      icon: 'twitter',
      url: 'https://twitter.com/atlasquantumbr'
    }, {
      icon: 'instagram',
      url: 'https://www.instagram.com/atlasquantum/'
    }, {
      icon: 'youtube',
      url: 'https://www.youtube.com/channel/UCMaBkMLfXfkHxfZb2Ja29Yg'
    }
  ];

  constructor() { }

  ngOnInit() { }

}
