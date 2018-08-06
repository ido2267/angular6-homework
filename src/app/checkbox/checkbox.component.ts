 


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  dataText1:string="";
  dataText2:string="";
  flag:boolean=false;

  changeData(txtInput:string , boxNum:number):void {
    var temp:string="";
    var len = txtInput.length;
    var bol:boolean=false;
    if (boxNum == 1)
    {  
      if (!this.flag)
      {
        this.dataText1= txtInput;
      }
      else {
        this.dataText2=txtInput;
      }
    }else
   if (!this.flag)
      {
        this.dataText2= txtInput;
      }
      else {
        this.dataText1=txtInput;
      }


    if (len > 4 && !this.flag)
    {
      this.flag = true;
      temp = this.dataText1;
      this.dataText1 = this.dataText2;
      this.dataText2 = temp;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
