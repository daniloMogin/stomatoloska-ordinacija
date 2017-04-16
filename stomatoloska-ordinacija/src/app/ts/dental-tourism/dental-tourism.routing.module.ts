import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DentalTourismComponent } from './dental-tourism.component';

const dentalTourismRoutes: Routes = [
    { path: 'dental-tourism', component: DentalTourismComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(dentalTourismRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DentalTourismRoutingModule { }
