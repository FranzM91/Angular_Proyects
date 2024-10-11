import { Component } from "@angular/core";
import { ProductService } from "src/app/demo/service/product.service";
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
    index = null;
    constructor() {
        this.reset();
    }
    reset() {
        this.index = null;
        this.selectEntity = new Usuario();
    }
    btnSave() {
        // var data = "Nombre:" + this.nombre + "||  Apellido:" + this.apellido;
        // alert(`Nombre: ${this.selectEntity.nombre} || Apellido: ${this.selectEntity.apellido} || Fecha: ${this.selectEntity.fechaNacimiento}`);
        if(this.index == null ) {
            this.dataSource.push(this.selectEntity);
        } else {
            this.dataSource.splice(this.index, 1, this.selectEntity);
        }
        console.log(this.dataSource);
        this.reset();
    }
    btnCancel() {
        this.reset();
    }
    btnEditar(item: Usuario){
        this.index = this.dataSource.indexOf(item);
        console.warn(`index: ${this.index}`);
        // this.selectEntity = item;
        this.selectEntity = {...item};
    }
    btnEliminar(item: Usuario){
        this.index = this.dataSource.indexOf(item);
        this.dataSource.splice(this.index, 1);
        this.reset();
        alert('Se elimino Correctament!');
    }
}