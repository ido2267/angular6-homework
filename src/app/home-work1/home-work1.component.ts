import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-work1',
  templateUrl: './home-work1.component.html',
  styleUrls: ['./home-work1.component.css']
})
export class HomeWork1Component implements OnInit {
  public bol:boolean=false;
  public arrayVal:string[]=[];
  public fontSize:string="12px";

  addComponent(val:string):void{
    this.arrayVal.push( val);
  }
  changeFontSize():void{
    
     this.bol = !this.bol;

     if(this.bol){
      this.fontSize="20px";
    }
    else{
      this.fontSize="12px";
    }
   
  }
  constructor() { }

  ngOnInit() {
  }

}
