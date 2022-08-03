import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {

  mainArrayObj:any = [];
  variableMainaBalance:any
  calculationObj = {
    mainamount:100000,
    interest:24,
    year:0
  }
  constructor() { }

  ngOnInit(): void {
  }

  goForCalculate(){
    this.mainArrayObj = [];
    // JSON.parse(JSON.stringify(this.calculationObj));
    this.variableMainaBalance =  +this.calculationObj.mainamount
    console.log('calculationObj',this.calculationObj);
    let totalinterest = 0;
    for (let index = 0; index < this.calculationObj.year * 12; index++) {
      let month = index +1;
      let interest = this.calculationObj.mainamount * this.calculationObj.interest / 1200
      totalinterest += interest;
      this.calculationObj.mainamount = this.calculateInterest(totalinterest,this.calculationObj.mainamount)
      this.mainArrayObj.push(
        {
          'month': month,
          'year': this.showYearMonth(month),
          'mainamount': this.calculationObj.mainamount,
          'interest': interest,
          'totalinterest': totalinterest,
        }
      )

    }
    console.log('mainArrayObj',this.mainArrayObj);
  }

  showYearMonth(month:number){
    let text;
    if(month / 12 < 1){
      text = `${month % 12} month`
    }else if(month % 12 > 0){
      text = `${Math.floor(month / 12)} year ${month % 12} month`
    }else{
      text = `${Math.floor(month / 12)} year`
    }
    return text;
  }

  calculateInterest(totalinterest:any,baseamount:any){
    let a = +totalinterest % 50000;
    let mainamount = baseamount
    if(a == 0){
      mainamount += totalinterest;
      // totalinterest = totalinterest - 50000;
    }
    return mainamount;
    
  }
}