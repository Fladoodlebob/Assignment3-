import { Component, OnInit } from '@angular/core';
import {MYBOOKS} from "../../assets/data/myBooks";
@Component({
  selector: 'app-marrj',
  templateUrl: './marrj.component.html',
  styleUrls: ['./marrj.component.css']
})
export class MarrjComponent implements OnInit {
  mybooks = MYBOOKS;
  constructor() { }
  ngAfterViewInit() {
    /* close divs */
    /* list of <div>s in #mylist (array of <div>s)*/
    var divs = 
     document.getElementById('mylist').getElementsByTagName('div');

    for (let x=0; x < divs.length; x++) {
      divs[x].style.display = "none";
    }
  }
    
    onClickMe(index) {
    var divs = 
     document.getElementById('mylist').getElementsByTagName('div');

    for (let x=0; x < divs.length; x++) {
      if (divs[index].style.display == 'none') {
        divs[index].style.display = 'block';
      }
      else {
        divs[index].style.display = 'none';
      }
    } /* end for */
  } /* end of onClickMe */

  ngOnInit() {
  }

  

}
