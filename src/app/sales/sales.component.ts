import { Component, OnInit } from '@angular/core';
import { products } from '../products';
 
class cars  extends products{
  public engineVolume:number;
  public yearOfManifecture: number;
  public horsePower:number;
  insertValues(_eng:number,_year:number,_horse:number) {
     this.engineVolume= _eng;
     this.yearOfManifecture=_year;
     this.horsePower=_horse;
  }
  };
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
 
  prod : products[] =[
    new products('001','Chair', 100),
    new products('002','Table', 500),
    new products('009','Cupboard',800)
];
newCar:cars[] = [new cars ('A001','Subaru',100000 ),
new cars('B100','Fiat,',70000),
new cars('D301','Citroen', 80000)]

  constructor() {
    this.newCar[0].engineVolume = 1600;
    this.newCar[0].yearOfManifecture = 2017;
    this.newCar[0].horsePower = 400;
    this.newCar[1].insertValues(2000,2015,300) ;
    this.newCar[2].insertValues(1800,2016,350) ;

  
  }

  ngOnInit() {
  }

}
