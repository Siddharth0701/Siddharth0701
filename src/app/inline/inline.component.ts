import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  template:`<h2>Siddharth Singh</h2>` ,
  styles:[`
  h2{

    color:green;
    font-family: 'Courier New', Courier, monospace;
    font-size:45px;
  }
  `],
})
export class InlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
