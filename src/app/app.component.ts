import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AngularComponentModule } from './AngularComponentModule';
import { StorageService } from './auth/services/storage/storage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AngularComponentModule,RouterLink,RouterLinkActive],
  standalone:true,
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-manager';
  isEmployeeLoggedIn :boolean=StorageService.isEmployeeLoggedIn();
  isAdminLoggedIn:boolean=StorageService.isAdminLoggedIn();

  constructor(private router:Router ){

  }

  ngOnInit(){
    this.router.events.subscribe((event) => {
    this.isEmployeeLoggedIn=StorageService.isEmployeeLoggedIn()
    this.isAdminLoggedIn=StorageService.isAdminLoggedIn()
    })
  }

  logout(){
    StorageService.logout()
    this.router.navigateByUrl("/login")
  }
}
