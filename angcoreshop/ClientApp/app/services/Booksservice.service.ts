import { Injectable, Inject } from '@angular/core';
import { Http, Response, BaseResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { identifierModuleUrl } from '@angular/compiler';
import { getBaseUrl } from '../app.browser.module';

@Injectable()
export class Booksservice {

    myAppurl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppurl = baseUrl;
    }
    getBooks() {
        return this._http.get(this.myAppurl + "api/Books/Disp_Rec")
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    detailBook(Id: number) {
        return this._http.get(this.myAppurl + "api/Books/Detail_Rec/" + Id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }

}