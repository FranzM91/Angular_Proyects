import { Component } from "@angular/core";
import { Usuario } from "../shared/usuario.model";

@Component({
    templateUrl: './formulario.component.html'
})
export class FormularioComponent {
    // nombre = "";
    // apellido = "";
    // fechaNacimiento = Date();
    selectEntity: Usuario;
    dataSource: Usuario[] = [];
    constructor() {
        this.reset();
    }
    reset() {
        this.selectEntity = new Usuario();
    }
    btnSave() {
        // var data = "Nombre:" + this.nombre + "||  Apellido:" + this.apellido;
        // alert(`Nombre: ${this.selectEntity.nombre} || Apellido: ${this.selectEntity.apellido} || Fecha: ${this.selectEntity.fechaNacimiento}`);
        this.dataSource.push(this.selectEntity);
        console.log(this.dataSource);
        this.reset();
    }
    btnCancel() {
        this.reset();
    }
}