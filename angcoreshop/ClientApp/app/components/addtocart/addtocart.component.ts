import { Component, Inject, Class, OnInit, AfterViewChecked } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Booksservice } from '../../services/Booksservice.service';
import { asTextData } from '@angular/core/src/view';
import { style } from '@angular/animations';

declare let paypal: any;

@Component({
    selector: 'addtocart',
    templateUrl: './addtocart.component.html',
    styleUrls: ['./addtocart.component.css']
})

export class addtocartcomponent implements OnInit{
    public bookList: any;
    Id: any;
    item: any;
    price: any;
    errorMessage: any;
    subtotal: any;


    addScript: boolean = false;
    paypalLoad: boolean = true;

    //finalAmount: number = this.subtotal;

    constructor(private _avRoute: ActivatedRoute,
        private _booksservice: Booksservice, private _router: Router) {
        this.Id = this._avRoute.snapshot.params["Id"];
        this.item= 1;
    }

    ngOnInit() {
        if (this.Id > 0) {
            this._booksservice.detailBook(this.Id)
                .subscribe(resp => {
                    this.bookList = resp;
                    this.price = resp.bPrice;
                    this.subtotal = this.item * this.price;
                },
                    error => {
                        this.errorMessage = error;
                    });
        }
        this.ngAfterViewChecked();
    }

    paypalConfig = {
        env: 'sandbox',
        client: {
            sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
            production: '<your-production-key here>'
        },
        commit: true,
        payment: (data: any, actions: any) => {
            return actions.payment.create({
                payment: {
                    transactions: [
                        { amount: { total: this.subtotal, currency: 'USD' } }
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


    editRowId: any;
    toggle(Id:number) {
        this.editRowId = Id;
        this.subtotal = this.item * this.price;
    }
    toggletwo(Id: number, val: number) {
        this.editRowId = Id;
        this.item = val;
        this.subtotal = this.item * this.price;
    }
}






//import { Component, AfterViewChecked } from '@angular/core';

//declare let paypal: any;

//@Component({
//    selector: 'addtocart',
//    templateUrl: './addtocart.component.html',
//    styleUrls: ['./addtocart.component.css']
//})
//export class addtocartcomponent implements AfterViewChecked {

//    addScript: boolean = false;
//    paypalLoad: boolean = true;

//    finalAmount: number = 1;
//    paypalConfig = {
//        env: 'sandbox',
//        client: {
//            sandbox: 'AZMU9n0MGzTazamnXyxwpov8mGgq-EpqMk7UiCoZQcmCg0hGHu5DGo5DXYU-EJeaSvM1IDqkoWomwhu-',
//            production: '<your-production-key here>'
//        },
//        commit: true,
//        payment: (data: any, actions: any) => {
//            return actions.payment.create({
//                payment: {
//                    transactions: [
//                        { amount: { total: this.finalAmount, currency: 'INR' } }
//                    ]
//                }
//            });
//        },
//        onAuthorize: (data:any, actions:any) => {
//            return actions.payment.execute().then((paymen:any) => {
//                //Do something when payment is successful.
//            })
//        }
//    };

//    ngAfterViewChecked(): void {
//        debugger;
//        if (!this.addScript) {
//            this.addPaypalScript().then(() => {
//                paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
//                this.paypalLoad = false;
//            })
//        }
//    }

//    addPaypalScript() {
//        this.addScript = true;
//        return new Promise((resolve, reject) => {
//            let scripttagElement = document.createElement('script');
//            scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
//            scripttagElement.onload = resolve;
//            document.body.appendChild(scripttagElement);
//        })
//    }

//}
