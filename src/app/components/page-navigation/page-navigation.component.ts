import { Component, OnInit } from '@angular/core';
import { IonicModule, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-page-navigation',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.scss'],
})
export class PageNavigationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
