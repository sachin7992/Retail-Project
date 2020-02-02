import { Component } from '@angular/core';
import {price, userType, today, productType} from '../../src/constValue';

var calculatedPrice = 0;
var publishedDate = new Date();
var rebate;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'kambiProject';

  constructor(){ 
    this.checkUserType()
    this.productTypePrices()
    this.calculatedPrice()
  }

  checkOrderDate(){
    if(publishedDate.toDateString == today.toDateString){
      return true;
    }
    return false
  }

  checkUserType(){
    var user = "company user"
    if(user == userType.companyUser){
      this.companyRebate();
    }
    if(user == userType.normalUser){
      this.normalRebate();
    }
  }
  
  companyRebate(){
    if(productType.newProduct){
      if(this.checkOrderDate){
        rebate = 15;
      }
      rebate = 5;
    }
    if(productType.oldProduct){
      rebate = 5;
    }
    return rebate;
  }

  normalRebate(){
    if(productType.newProduct){
      rebate = 0;
      if(this.checkOrderDate()){
        rebate = 10;
      }
    }
    if(productType.oldProduct){
      rebate = 0;
    }
    return rebate;
  }

  productTypePrices(){
    
    var product = productType.oldProduct;

    if(product == productType.newProduct){
      calculatedPrice = calculatedPrice + 25;
    }
    if(product == productType.oldProduct){
      calculatedPrice = calculatedPrice + 35;
    }
    return calculatedPrice;
  }

  calculatedPrice(){
    calculatedPrice = price + calculatedPrice - rebate
    console.log("calculatedPrice", calculatedPrice)
  }
}