import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
// import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { AppRoutingModule } from './app-routing.module';
import { FormularioComponent } from './demo/components/formulario/formulariocomponent/formulario.component';

@NgModule({
    declarations: [
        AppComponent, 
        // NotfoundComponent,
        // declare my components
        FormularioComponent
    ],
    imports: [
        AppRoutingModule, 
        FormsModule,
        CommonModule,
        AppLayoutModule,
        // import Module from PrimeNG
        ButtonModule,
        InputTextModule,
        CalendarModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService,
        // add my http interceptors
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
