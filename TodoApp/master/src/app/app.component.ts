import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    firstName: string = "Hoy el Lunes";
    dia: string = "JUEVES";
    year: number = 2025;
    data = [100, 200, 300, 400, 500];
    disableBtn = true;

    nombre = "";
    apellido = "";
    fechaNacimiento = Date();

    constructor(private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
    eventoClick() {
        var data = this.dia + this.year;
        console.warn(`funciona click ${data}`);
        console.warn(`ultimo mensaje ${this.firstName}`);
    }

    btnSave() {
        console.log(`
        Name: ${this.nombre}
        Apellido: ${this.apellido}
        FechaNacimiento: ${this.fechaNacimiento}
        `);
        console.warn('SaveData');
    }
}
