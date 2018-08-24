import { Component, AfterViewChecked } from '@angular/core';

declare let paypal: any;

@Component({
    selector: 'test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class testcomponent implements AfterViewChecked {

    addScript: boolean = false;
    paypalLoad: boolean = true;

    finalAmount: number = 12;

    paypalConfig = {
        env: 'sandbox',
        client: {
            sandbox: 'AZMU9n0MGzTazamnXyxwpov8mGgq-EpqMk7UiCoZQcmCg0hGHu5DGo5DXYU-EJeaSvM1IDqkoWomwhu-',
            production: '<your-production-key here>'
        },
        commit: true,
        payment: (data: any, actions: any) => {
            return actions.payment.create({
                payment: {
                    transactions: [
                        { amount: { total: this.finalAmount, currency: 'INR' } }
                    ]
                }
            });
        },
        onAuthorize: (data: any, actions: any) => {
            return actions.payment.execute().then((payment: any) => {
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
