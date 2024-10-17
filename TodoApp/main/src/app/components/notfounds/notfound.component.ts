import { Component, OnInit } from '@angular/core';
import { BaseService } from '../shared/base.service';

@Component({
    template: `<h1> Error 404 Not found</h1>`,
    providers: [BaseService]
})
export class NotFoundComponent implements OnInit {
    constructor(http: BaseService) {
        http.BaseService(null, '/todoapp/getbyid').subscribe(
            response => {
                console.log(response);
            }
        );
    }

    ngOnInit(): void {}
}
