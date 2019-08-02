import { Component, OnInit, Input } from '@angular/core';
import {marrJ} from 'src/app/marrj';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() headerInfo:marrJ;

  constructor() { }

  ngOnInit() {
  }

}
