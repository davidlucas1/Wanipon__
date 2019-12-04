import { Component, AfterViewChecked } from '@angular/core';
 
declare let paypal: any;
 
@Component({
  selector: 'app-contribuir',
  templateUrl: './contribuir.page.html',
  styleUrls: ['./contribuir.page.scss'],
})
export class ContribuirPage implements AfterViewChecked {
  
  addScript: boolean = false;
  paypalLoad: boolean = true;
  
  finalAmount: number = 1;
 
  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AeE6NzHJJ6qqjXRTZD4upGRCUfIZuaYHAG3xbYAkKlkILQZAh8zcxVOVkTAEO_RZ547XgqSGRFqsKeaF',
      production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'BRL' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
      })
    }
  };
 
  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }
 
}