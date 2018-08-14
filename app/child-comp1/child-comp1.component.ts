import { Component, OnInit,SimpleChanges, OnChanges,  Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-comp1',
  templateUrl: './child-comp1.component.html',
  styleUrls: ['./child-comp1.component.css']
})
export class ChildComp1Component implements OnInit {

  public tempText:string="";


  @Output()
  textToParent:EventEmitter<string> = new EventEmitter<string>();

  raiseEvent(str:string)
  { 
    this.textToParent.emit(str);
  }
  constructor() { }

  ngOnInit() {
  }

}
