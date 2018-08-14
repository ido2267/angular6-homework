import { Component, OnInit, Input,SimpleChanges, OnChanges, } from '@angular/core';

@Component({
  selector: 'app-child-comp2',
  templateUrl: './child-comp2.component.html',
  styleUrls: ['./child-comp2.component.css']
})
export class ChildComp2Component implements OnInit {
   @Input()
   dataFromParent:string="";
   dataArr : string[] = [];


  constructor() { }

 ngOnChanges(changes : SimpleChanges)
  {
    if(changes["dataFromParent"])
      {
        this.dataArr.push(changes["dataFromParent"].currentValue);
      }
      console.log(this.dataArr.length)
  }
  ngOnInit() {
  }

}
