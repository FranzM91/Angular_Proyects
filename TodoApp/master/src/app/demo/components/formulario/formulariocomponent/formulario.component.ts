import { Component } from "@angular/core";

@Component({
    templateUrl: './formulario.component.html'
})
export class FormularioComponent {
    nombre = "";
    apellido = "";
    fechaNacimiento = Date();

    constructor() {
    }

    btnSave() {}
}