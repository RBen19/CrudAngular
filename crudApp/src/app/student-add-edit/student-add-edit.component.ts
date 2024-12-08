import { Component, Inject, inject, Injectable, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-student-add-edit',
  imports: [MatDialogModule,
            MatFormFieldModule,
            MatButtonModule,
            MatInputModule,
            MatSelectModule,
            ReactiveFormsModule,
  ],
  templateUrl: './student-add-edit.component.html',
  styleUrl: './student-add-edit.component.scss'
})
export class StudentAddEditComponent implements OnInit {
  // fromGroup l'ensemble des champs d'un formulaire
  studentFrom :FormGroup;
   classes: string[] =[
       'GL',
       'RI',
       'DITI'
    ];
    // initialisation du formulaire studentFrom
   constructor(private _fb: FormBuilder,
     private _studentService:StudentService,
      private _dialogRef: MatDialogRef<StudentAddEditComponent>,
    @Inject (MAT_DIALOG_DATA) public _data:any) {
      this.studentFrom=this._fb.group({
          nom:'',
          prenom:'',
          classe:''
      })
    
   }
   ngOnInit(): void {
     this.studentFrom.patchValue(this._data);
   }
   closeDialog() {
    this._dialogRef.close();
   }
   submitData(){
    if(this.studentFrom.valid){
      /*
        suscribe delenche l'execution de la requete http et aide à gerer les reponses du serveur
        utilise next  si  la requete reussie
      */
     if(this._data){
       this._studentService.updateStudent(this._data.id,this.studentFrom.value).subscribe({
         // fonction qui sera appeler à l'emission de nouvelle valeurs 
         next:(val:any)=>{
           alert("modification reussit");
           console.log(val);
           this._dialogRef.close(true);
         },
         // fonction qui affichera les erreurs
         error:(err:any)=>{
         console.error(err)
         
        }
       });
       this._dialogRef.close(true);
       // this._dialogRef.close();

     }else{

      this._studentService.addStudent(this.studentFrom.value).subscribe({
        // fonction qui sera appeler à l'emission de nouvelle valeurs 
         next:(val:any)=>{
           alert("enregistrement reussit");
           console.log(val);
           this._dialogRef.close(true);
          // this._dialogRef.close();
         },
         // fonction qui affichera les erreurs
         error:(err:any)=>{
         console.error(err)
         
        }
       });

     }
      
      console.log(this.studentFrom.value)
    }
   }
   openEditStudent(data :any){
    
   }
}
