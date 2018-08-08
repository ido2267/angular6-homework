import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  backColor:string="blue"
  redCheck:boolean=false;
  greenCheck:boolean=false;
  blueCheck:boolean=false;
  person:any =
 [  
   {name:"Dana",age:"20",city:"Haifa"},
  {name:"Ron",age:"22",city:"Tel Aviv"},
   {name:"Dov",age:"31",city:"Ashdod"},
    {name:"Vered",age:"19",city:"Eilat"}];


  changeBackgroundColor(boxValue:string):void{
   var len = boxValue.length;
   if (len <5)
    {this.backColor="blue";}
    else{this.backColor="red";}


  }
  constructor() { }

  ngOnInit() {
  }

}