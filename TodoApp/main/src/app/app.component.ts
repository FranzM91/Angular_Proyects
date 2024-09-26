import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
    selector: 'app-root-ai',
    templateUrl: './app.component.html',
    // template: `<h2>Hola AI</h2>`
})
export class AppComponent {

    menuMode: string = 'static';
    firstName: string = "Hoy el Lunes";
    dia: string = "JUEVES";
    year: number = 2025;
    data = [100, 200, 300, 400, 500];
    disableBtn = true;
    constructor(private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
        document.documentElement.style.fontSize = '14px';
    }

    eventoClick() {
        var data = this.dia + this.year;
        console.warn(`funciona click ${data}`);
        console.warn(`ultimo mensaje ${this.firstName}`);
    }
}
