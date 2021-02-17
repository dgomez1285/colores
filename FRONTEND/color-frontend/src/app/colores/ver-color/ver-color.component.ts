import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Color } from '../color.model';
import { ColoresService } from '../colores.service';

@Component({
  selector: 'app-ver-color',
  templateUrl: './ver-color.component.html',
  styleUrls: ['./ver-color.component.css']
})
export class VerColorComponent implements OnInit {

  color:any;

  constructor(public dialogRef: MatDialogRef<VerColorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private coloresService: ColoresService) {
     
     }

  ngOnInit(): void {
    this.verColor();
    
  }    

  verColor(): void {
    this.coloresService.obtenerColor(this.data.idColor)
      .subscribe(
        data2 => {
         this.color=data2[0];
          console.log(data2);
        },
        error => {
          console.log(error);
        });
  }

}
