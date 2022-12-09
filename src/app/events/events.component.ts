import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
public name='';
  constructor() { }

  ngOnInit(): void {
  }
// myEvent(){
//   //alert("Sucess");
//   //console.log("Welcome to angular")
//   this.name="Siddharth Singh";
//}
// myEvent(name:string,age:number){
// //alert(name, age)
// alert(name +"  "+ age);
myEvent(event:any){
//alert(name, age)
//alert(name +"  "+ age);
console.log(event.type)

}
}
