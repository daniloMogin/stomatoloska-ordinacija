import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesComponent } from './services.component';

const servicesRoutes: Routes = [
    { path: 'services', component: ServicesComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(servicesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ServicesRoutingModule { }
