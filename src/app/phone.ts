

export class phone {
    public mobileNumber:string;
    public homeNumber:string;
    public faxNumber:string ;

    constructor(phoneStr:string[] )
    {
   
     let validPhone:boolean=false;
    
     validPhone = this.validateNumber(phoneStr[0]);
     if (validPhone)   
     { this.mobileNumber=phoneStr[0];}
     validPhone =  this.validateNumber(phoneStr[1]);
      { this.homeNumber = phoneStr[1];}
     validPhone = this.validateNumber(phoneStr[2]);
     if (validPhone)   
     {this.faxNumber= phoneStr[2];}
       
   }

   validateNumber(phoneNumber:string):boolean {

          let answer:boolean=true;
          let dash:string ="-";
       if (phoneNumber.length < 1) 
       { answer=false;}  
       if (phoneNumber.length> 10)
          {answer=false;}
       if (phoneNumber.indexOf(dash) != 3 && phoneNumber.indexOf(dash) != 2  )  
       {answer=false;}

       return answer;
   }
}
