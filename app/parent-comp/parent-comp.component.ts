import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {
  public dataFromChild : string ="";
  public dataToChild:string="";
  
  getData(str : string)
  {
     this.dataFromChild = str;
     
  }

  moveDataToChild2(){
  this. dataToChild = this.dataFromChild;
  }

  constructor() { }

  ngOnInit() {
  }

}
