import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularComponentModule } from '../../../../AngularComponentModule';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-task',
  imports: [AngularComponentModule],
  templateUrl: './post-task.component.html',
  styleUrl: './post-task.component.css',
})
export class PostTaskComponent {
  taskForm!: FormGroup;
  listOfEmployees: any = [];
  listOfPriorities: any = ['LOW', 'MEDIUM', 'HIGH'];

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.getUsers();
    this.taskForm = this.fb.group({
      employeeId: [null, [Validators.required]],
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      dueDate: [null, Validators.required],
      priority: [null, [Validators.required]],
    });
  }

  getUsers() {
    this.adminService.getUsers().subscribe((res) => {
      this.listOfEmployees = res;
      console.log(res);
    });
  }

  postTask() {
    console.log(this.taskForm.value);
    this.adminService.postTask(this.taskForm.value).subscribe((res) => {
      if (res.id != null) {
        this.snackBar.open('Task Posted Successfully', 'Close', {
          duration: 5000,
        });
        this.router.navigateByUrl('/admin/dashboard');
      } else {
        this.snackBar.open('Failed to Post Task', 'Close', {
          duration: 5000,
        });
      }
    });
  }
}
