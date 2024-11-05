import { Component } from "@angular/core";
import { Genero, Usuario } from "../shared/usuario.model";
import { ProductService } from "src/app/demo/service/product.service";

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
    optionGenero: Genero[] = [];
    constructor(public http: ProductService) {
        this.reset();
        this.optionGenero = [
            {nombre: 'Masculino', id: 1}, 
            {nombre: 'Femenino', id: 2}
        ];
    }
    login() {
        this.http.HttpPost(null, '/usuario/getAll')
        .subscribe(
            // response => console.log(response),
            response => this.dataSource = response,
            error => console.log(`ERROR::: ${error}`)
        );
    }
    reset() {
        this.index = null;
        this.selectEntity = new Usuario();
        this.selectEntity.killed = false;
        this.selectEntity.sexo = {id: 1, nombre: 'Masculino'};
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

    // this.http.HttpPost({'email': 'salo@mail.com', 'password': 'salo'}, '/appuser/login').subscribe(
    //     response => console.log(response),
    //     error => console.log(`ERROR::: ${error}`)
    // );
}