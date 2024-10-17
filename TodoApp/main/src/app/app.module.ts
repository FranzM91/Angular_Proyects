import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { StyleClassModule } from 'primeng/styleclass';
import { AppComponent } from './app.component';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        StyleClassModule,
        // import Module from PrimeNG
        MenuModule,
        InputTextModule,
    ],
    declarations: [
        AppComponent,
        // declare my components
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        // add my http interceptors
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
