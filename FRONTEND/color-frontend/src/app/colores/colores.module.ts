import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoColoresComponent } from './listado-colores/listado-colores.component';
import { ColoresService } from './colores.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { VerColorComponent } from './ver-color/ver-color.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [ListadoColoresComponent, VerColorComponent],
  imports: [
    MatTableModule,
    CommonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  exports: [
    ListadoColoresComponent
    ,
    VerColorComponent
  ],  
  providers: [
    ColoresService,
    HttpClientModule,MatDialog
  ]
})
export class ColoresModule { }
