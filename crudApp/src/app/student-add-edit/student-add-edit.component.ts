import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-student-add-edit',
  imports: [MatDialogModule,
            MatFormFieldModule,
            MatButtonModule,
            MatInputModule,
            MatSelectModule,
            ReactiveFormsModule
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
   constructor(private _fb: FormBuilder) {
      this.studentFrom=this._fb.group({
          nom:'',
          prenom:'',
          classe:''
      })
    
   }
   submitData(){
    if(this.studentFrom.valid){
      console.log(this.studentFrom.value)
    }
   }
}
