import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { AngularComponentModule } from '../../../../AngularComponentModule';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  imports: [AngularComponentModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  listOfTask: any = [];
  constructor(
    private service: EmployeeService,
    private snackbar: MatSnackBar,
  ) {
    this.getTask();
  }

  getTask() {
    this.service.getEmployeeTaskByUserId().subscribe((res) => {
      console.log(res);
      this.listOfTask = res;
    });
  }

  updateStatus(id: number, status: string) {
    this.service.updateStatuss(id, status).subscribe((res) => {
      if (res.id != null) {
        this.snackbar.open('Update status successfully', 'Close', {
          duration: 5000,
        });
        this.getTask();
      } else {
        this.snackbar.open('Update status failed', 'Close', { duration: 5000 });
      }
    });
  }
}
