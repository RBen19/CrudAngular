import { Component, Injectable } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { DialogRef } from '@angular/cdk/dialog';

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
export class StudentAddEditComponent {
  // fromGroup l'ensemble des champs d'un formulaire
  studentFrom :FormGroup;
   classes: string[] =[
       'GL',
       'RI',
       'DITI'
    ];
    // initialisation du formulaire studentFrom
   constructor(private _fb: FormBuilder, private _studentService:StudentService, private _dialogRef: DialogRef<StudentAddEditComponent>) {
      this.studentFrom=this._fb.group({
          nom:'',
          prenom:'',
          classe:''
      })
    
   }
   submitData(){
    if(this.studentFrom.valid){
      alert("hello");
      alert("bjr");
      /*
        suscribe delenche l'execution de la requete http et aide à gerer les reponses du serveur
        utilise next  si  la requete reussie
      */
      this._studentService.addStudent(this.studentFrom.value).subscribe({
       // fonction qui sera appeler à l'emission de nouvelle valeurs 
        next:(val:any)=>{
          alert("nouvel enregistrement");
          console.log(val);
          this._dialogRef.close();
         // this._dialogRef.close();
        },
        // fonction qui affichera les erreurs
        error:(err:any)=>{
        console.error(err)
        
       }
      });
      console.log(this.studentFrom.value)
      
    }else{
      alert("veuillez remplir tous les champs");
    }
   }
}
