import { Component, Inject, Class } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Booksservice } from '../../services/Booksservice.service';
import { asTextData } from '@angular/core/src/view';
import { style } from '@angular/animations';

@Component({
    selector: 'displaybooks',
    templateUrl: './displaybooks.component.html',
    styleUrls: ['./displaybooks.component.css']
})
export class displaybookscomponent {
    public bookList = [];
    //public test: any;
 //   myImage: string = "http://example.com/path/image.png";
    constructor(public http: Http, private _router: Router, private booksservice: Booksservice) {
        //this.test = "Ram";       
        this.getBooks();
    }
    getBooks() {        
        this.booksservice.getBooks().subscribe((data) => {
            this.bookList = data;
        });        
    }
    addtocart(Id: number) {
        this._router.navigate(['/addtocart', { Id }]);
    }
    buy(): void {
        this._router.navigate(['/buy']);
    }
   
}
interface BooksData {
    bId: number;
    bName: string;
    bPrice: number;
    bDsc: string;
    bPic: string;
}