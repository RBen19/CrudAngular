import { Component} from '@angular/core';
import {OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {StudentAddEditComponent } from './student-add-edit/student-add-edit.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './services/student.service';
import {MatTableModule} from '@angular/material/table';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';
interface student{
  id: string,
  nom: string,
  prenom: string,
  classe: string
}
@Component({
  selector: 'app-root',
  imports: [
            MatToolbarModule,
            MatIconModule,
            MatButtonModule,
            MatDialogModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            HttpClientModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
 
  title = 'crudApp';
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'classe','action'];

 

    // ! pour dire que cela peut etre null
    dataSource!: MatTableDataSource<student>;
   

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  constructor(private _dialog: MatDialog,private _studentServices :StudentService){}
  
  ngOnInit(): void {
    this.getALLStudent();
  }
  openAddEditStudentsFrom() {
    this._dialog.open(StudentAddEditComponent);
  }
  getALLStudent(){
    this._studentServices.getAllStudents().subscribe({
      next:(res) => {
          this.dataSource =new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        //console.log(res);
      },
      error:console.log
    });
  }

  deletedStudent(id :string){
    this._studentServices.deleteStudent(id).subscribe({
      next:() => {
        alert("Supression reussit");
        this.getALLStudent();
      },
      error:console.log
    });
  }
   /*
    dans le cycle de vie du component il y a ngOnInit qui permet de 
    bien initialiser le composant et de s'assurer qu'il est pret et fonctionnel

    il sert a initialiser le composant et aussi pour charger des données une fois que 
    le composant est pret et fonctionnelle.

    il permet aussi de quasiment garentir l'execution car il n'est appelé 
    qu'une fois apres que le composant soit integralement pret  

    selon ma comprehension de la chose en l'état actuel
  */
}
