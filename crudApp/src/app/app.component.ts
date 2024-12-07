import { Component } from '@angular/core';
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
@Component({
  selector: 'app-root',
  imports: [
            MatToolbarModule,
            MatIconModule,
            MatButtonModule,
            MatDialogModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crudApp';
  constructor(private _dialog: MatDialog){}
  openAddEditStudentsFrom() {
    this._dialog.open(StudentAddEditComponent);
  }
}
