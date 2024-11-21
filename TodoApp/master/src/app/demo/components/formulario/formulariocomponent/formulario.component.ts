import { Component } from "@angular/core";
import { Genero, Usuario } from "../shared/usuario.model";
import { ProductService } from "src/app/demo/service/product.service";
import { ConfirmationService, MessageService } from "primeng/api";

@Component({
    templateUrl: './formulario.component.html',
    providers: [ConfirmationService, MessageService]
})
export class FormularioComponent {
    // nombre = "";
    // apellido = "";
    // fechaNacimiento = Date();
    selectEntity: Usuario;
    dataSource: Usuario[] = [];
    index = null;
    optionGenero: Genero[] = [];


    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
    constructor(public http: ProductService, private confirmationService: ConfirmationService, private messageService: MessageService) {
        this.reset();
        this.optionGenero = [
            {nombre: 'Femenino', id: 0},
            {nombre: 'Masculino', id: 1} 
        ];

        console.warn("estoy vivo!!!!");
        this.loadTable();
    }
    loadTable() {
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
        // this.selectEntity.killed = false;
        this.selectEntity.Sexo = {id: 1, nombre: 'Masculino'};
    }
    btnSave() {
        // var data = "Nombre:" + this.nombre + "||  Apellido:" + this.apellido;
        // alert(`Nombre: ${this.selectEntity.nombre} || Apellido: ${this.selectEntity.apellido} || Fecha: ${this.selectEntity.fechaNacimiento}`);
        // if(this.index == null ) {
        //     this.dataSource.push(this.selectEntity);
        // } else {
        //     this.dataSource.splice(this.index, 1, this.selectEntity);
        // }
        this.visible = false;
        console.log(this.dataSource);
        this.http.HttpPost(this.selectEntity, '/usuario/save').subscribe(
            response => {
                console.log(response);
                this.loadTable();
            },
            error => {
                console.log(`ERROR::: ${error}`);
            }
        );
        this.reset();
    }
    btnCancel() {
        this.visible = false
        this.reset();
    }
    btnEditar(item){
        this.showDialog();
        this.index = this.dataSource.indexOf(item);
        console.warn(`index: ${this.index}`);
        // this.selectEntity = item;
        this.selectEntity = {...item};
        this.selectEntity.Sexo = (item.Sexo == 0) ? {nombre: 'Femenino', id: 0} : {nombre: 'Masculino', id: 1};
        this.selectEntity.FechaNacimiento = new Date(item.FechaNacimiento);
    }
    btnEliminar(item: Usuario, event){
        this.selectEntity = item;
        // this.index = this.dataSource.indexOf(item);
        // this.dataSource.splice(this.index, 1);
        // this.reset();
        // alert('Se elimino Correctament!');
        this.confirm2(event);
    }

    // this.http.HttpPost({'email': 'salo@mail.com', 'password': 'salo'}, '/appuser/login').subscribe(
    //     response => console.log(response),
    //     error => console.log(`ERROR::: ${error}`)
    // );

    confirm2(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: `Esta seguro de eliminar este registro? Nombre: ${this.selectEntity.Nombre}`,
            header: 'Confirmacion para eliminar!',
            icon: 'pi pi-info-circle',
            acceptButtonStyleClass:"p-button-danger p-button-text",
            rejectButtonStyleClass:"p-button-text p-button-text",
            acceptIcon:"none",
            rejectIcon:"none",
            accept: () => {
                // crear nuestro servicio REST API para eliminar
                this.http.HttpPost(null, `/usuario/delete/${this.selectEntity.Id}`).subscribe(
                    response => {
                        this.reset();
                        this.loadTable();
                        this.messageService.add({ severity: 'info', summary: 'Exito', detail: 'Se elimino correctamente!' });
                    },
                    error => {
                        this.reset();
                        this.messageService.add({ severity: 'error', summary: 'Rechazado', detail: 'Error al eliminar!' });
                    }
                );
            },
            reject: () => {
                this.reset();
                this.messageService.add({ severity: 'error', summary: 'Rechazado', detail: 'Error al eliminar!' });
            }
        });
    }
}