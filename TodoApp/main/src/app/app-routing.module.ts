import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/notfounds/notfound.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'notfound', pathMatch: 'full' },
            { path: '**', redirectTo: 'notfound'},
            { path:'notfound', component: NotFoundComponent}, // create component
        ],
        {
            scrollPositionRestoration: 'enabled',
            anchorScrolling:'enabled'
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
