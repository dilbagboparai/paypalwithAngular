import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

import { Booksservice } from './services/Booksservice.service';
import { displaybookscomponent } from './components/displaybooks/displaybooks.component';
import { detailbookcomponent } from './components/detailbook/detailbook.component';
import { addtocartcomponent } from './components/addtocart/addtocart.component';
import { BuyComponent } from './components/buy/buy.component';
import { testcomponent } from './components/test/test.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        displaybookscomponent,
        detailbookcomponent,
        addtocartcomponent,
        BuyComponent,
        testcomponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'displaybooks', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'displaybooks', component: displaybookscomponent },
            { path: 'counter', component: CounterComponent },
            { path: 'Books/Detail_Rec/:Id', component: detailbookcomponent },
            { path: 'addtocart', component: addtocartcomponent },
            { path: 'buy', component: BuyComponent },
            { path: 'test', component: testcomponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ], providers: [Booksservice]
})
export class AppModuleShared {
}
