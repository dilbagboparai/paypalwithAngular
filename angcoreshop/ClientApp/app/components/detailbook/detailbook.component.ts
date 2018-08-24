import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Booksservice } from "../../services/Booksservice.service";
import { Location } from '@angular/common';

@Component({
    selector: "detailbook",
    templateUrl: "./detailbook.component.html"
})

export class detailbookcomponent implements OnInit {
    public bookList: any;
    Id: any;
    errorMessage: any;

    constructor(private _avRoute: ActivatedRoute, private _booksservice: Booksservice, private _router: Router) {
        this.Id = this._avRoute.snapshot.params["Id"];
    }

    ngOnInit() {
        if (this.Id > 0) {
            this._booksservice.detailBook(this.Id)
                .subscribe(resp => {
                    this.bookList = resp;
                },
                    error => {
                        this.errorMessage = error;
                    });
        }
    }
    addtocart(Id: number) {
        this._router.navigate(['/addtocart', {Id}]);
    }
    buy(): void {
        this._router.navigate(['/buy']);
    }
}
