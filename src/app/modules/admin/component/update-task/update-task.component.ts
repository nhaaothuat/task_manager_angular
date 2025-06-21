import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularComponentModule } from '../../../../AngularComponentModule';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-task',
  imports: [AngularComponentModule],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css',
})
export class UpdateTaskComponent implements OnInit{
  id!: number ;
  taskForm!:FormGroup
  listOfEmployees: any = [];
  listOfPriorities: any = ['LOW', 'MEDIUM', 'HIGH'];
  listOfTaskStatus: any = [ "PENDING",
    "INPROGRESS",
    "COMPLETED",
    "DEFERED",
    "CANCELLED"];
  constructor(
    private service: AdminService,
    private route: ActivatedRoute,
    private fb:FormBuilder,
    private router:Router,
    private snackBar: MatSnackBar,
  ) {
    // this.getTaskById();
    this.getUsers()
    this.taskForm = this.fb.group({
     
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      dueDate: [null, Validators.required],
      priority: [null, [Validators.required]],
      
      taskStatus: [null, [Validators.required]],
       employeeId: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.params['id']);
    console.log("ID of task to update:", this.id);
    this.getTaskById();
  }

  getTaskById() {
    this.service.getTaskById(this.id).subscribe((res)=>{
      this.taskForm.patchValue(res)
      console.log(res)
    })
  }

  getUsers(){
    this.service.getUsers().subscribe((res)=>{
      this.listOfEmployees=res
      console.log(res)
    })
  }

  updateTask() {
    console.log(this.taskForm.value);
    this.service.updateTask(this.id,this.taskForm.value).subscribe((res) => {
      if (res.id != null) {
        this.snackBar.open('Task updated Successfully', 'Close', {
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
