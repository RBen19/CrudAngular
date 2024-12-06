import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-student-add-edit',
  imports: [MatDialogModule,
            MatFormFieldModule,
            MatButtonModule,
            MatInputModule
  ],
  templateUrl: './student-add-edit.component.html',
  styleUrl: './student-add-edit.component.scss'
})
export class StudentAddEditComponent {
  
}
