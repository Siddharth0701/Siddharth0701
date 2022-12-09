import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interploation',
  templateUrl: './interploation.component.html',
  styleUrls: ['./interploation.component.css']
})
export class InterploationComponent implements OnInit {
  public name="Siddharth Singh";
  public age=21;
  constructor() { }

  ngOnInit(): void {
  }
  helloMessage(){
    return "Hello Siddharth Singh"
  }

}
