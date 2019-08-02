import { Component, OnInit, Input } from '@angular/core';
import {marrJ} from 'src/app/marrj';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() footerInfo:marrJ;

  constructor() { }

  ngOnInit() {
  }

}
