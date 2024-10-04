import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormularioComponent } from "../formulariocomponent/formulario.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                component: FormularioComponent
            }
        ])
    ],
    exports: [RouterModule]
})
export class FormularioRoutingModule {}