import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent  implements OnInit {
  @Input() title: string = "Page Title";

  constructor() { }

  ngOnInit() {}

}
