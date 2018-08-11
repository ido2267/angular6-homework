import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { phone } from '../phone';

@Component({
  selector: 'app-home-work2',
  templateUrl: './home-work2.component.html',
  styleUrls: ['./home-work2.component.css']
})
export class HomeWork2Component implements OnInit {
  
public employee:Person[];

 constructor() {  

  this.employee = [new Person('Moshe', 32,
 [ new phone(['02-6671511','053-2229898','03-4455667']), 
 new phone(['03-1122334','050-2233441','04-1234567']),
 new phone(['03-8899005','050-4455667','04-1100998'])
]),
 new Person('Dana', 24,
 [ new phone(['09-2233778','052-1133447','09-8089022']), 
 new phone(['04-4466779','053-7654327','09-2277334'])]
)]; 
   }

  ngOnInit() {
  }

}
