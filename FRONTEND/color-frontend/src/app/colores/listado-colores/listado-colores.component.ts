import { Component, OnInit, ViewChild } from '@angular/core';
import { Color } from '../color.model';
import { ColoresService } from '../colores.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { AfterViewInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { VerColorComponent } from '../ver-color/ver-color.component';

@Component({
  selector: 'app-listado-colores',
  templateUrl: './listado-colores.component.html',
  styleUrls: ['./listado-colores.component.css']

})
export class ListadoColoresComponent implements AfterViewInit {


  colores!: Color[];
  displayedColumns: string[] = ['id', 'name', 'color','accion'];
  dataSource = new MatTableDataSource<Color>();


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor( private coloresService: ColoresService ,public dialog: MatDialog) { 

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.listadoColores();
  }


 /** 
  ngAfterViewInit(): void {
    debugger;
    
    this.dataSource.paginator = this.paginator;
  }
 ***/
  listadoColores(): void {
    this.coloresService.listadoColores()
      .subscribe(
        data => {
          debugger;
          this.colores = data;
          this.dataSource = new MatTableDataSource(data);
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  verColor(idColor:number): void {
  
    const dialogRef = this.dialog.open(VerColorComponent, {
      width: '500px',
      height: '500px',
      data: {idColor:idColor}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
