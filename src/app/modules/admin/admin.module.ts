import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PostTaskComponent } from './component/post-task/post-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UpdateTaskComponent } from './component/update-task/update-task.component';

const routes:Routes=[
  {path:"dashboard",component:DashboardComponent},
  {path:"task", component:PostTaskComponent},
  {path:"task/:id/edit",component:UpdateTaskComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  
  ]
})
export class AdminModule { }
