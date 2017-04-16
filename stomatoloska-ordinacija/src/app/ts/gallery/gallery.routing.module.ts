import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleryComponent } from './gallery.component';

const galleryRoutes: Routes = [
    { path: 'gallery', component: GalleryComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(galleryRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class GalleryRoutingModule { }
