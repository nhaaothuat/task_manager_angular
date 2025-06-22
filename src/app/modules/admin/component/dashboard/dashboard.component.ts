import { Component } from '@angular/core';

import { AdminService } from '../../services/admin.service';

import { AngularComponentModule } from '../../../../AngularComponentModule';
import { RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [AngularComponentModule, RouterModule],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  listOfTasks: any = [];
  searchForm: FormGroup;
  constructor(
    private service: AdminService,
    private snackbar: MatSnackBar,
    private fb: FormBuilder,
  ) {
    this.getTask();
    this.searchForm = this.fb.group({
      title: [null],
    });
  }

  getTask() {
    this.service.getTasks().subscribe((res) => {
      this.listOfTasks = res;
      console.log(res);
    });
  }

  deleteTask(taskId: number) {
    this.service.deleteTask(taskId).subscribe((res) => {
      this.snackbar.open('Task deleted successfully', 'Close', {
        duration: 3000,
      });
      this.getTask();
    });
  }

  searchTask() {
    this.listOfTasks=[]
    const title = this.searchForm.get('title')!.value;
    console.log(title);
    this.service.searchTask(title).subscribe((res)=>{
      console.log(res)
      this.listOfTasks=res;
    })
  }
}
