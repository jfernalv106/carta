import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaComponent } from './carta/carta.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    CartaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    CartaComponent
  ]
})
export class CartaModule { }
