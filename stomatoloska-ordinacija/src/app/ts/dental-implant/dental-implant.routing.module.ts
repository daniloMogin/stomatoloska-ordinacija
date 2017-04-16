import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DentalImplantComponent } from './dental-implant.component';

const dentalImplantRoutes: Routes = [
    { path: 'dental-implant', component: DentalImplantComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(dentalImplantRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DentalImplantRoutingModule { }
