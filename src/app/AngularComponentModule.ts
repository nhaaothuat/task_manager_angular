import { NgModule } from "@angular/core"
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatNativeDateModule} from '@angular/material/core';
import { CommonModule } from '@angular/common';
@NgModule({
     exports:[
MatButtonModule,
MatCardModule,
MatChipsModule,
MatDatepickerModule,
MatSelectModule,
MatToolbarModule,
MatProgressSpinnerModule,
MatNativeDateModule,
MatSnackBarModule,
MatRadioModule,
MatTableModule,
MatDialogModule,
CommonModule,
MatDividerModule,
MatFormFieldModule,
ReactiveFormsModule,
MatIconModule,
MatInputModule,
MatListModule,
MatMenuModule,
MatPaginatorModule
     ]
})
export class AngularComponentModule{
     
}