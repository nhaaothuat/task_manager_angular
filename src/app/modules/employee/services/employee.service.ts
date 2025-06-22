import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../../../auth/services/storage/storage.service';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8080/api/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployeeTaskByUserId():Observable<any>{
    return this.http.get(BASE_URL+"/tasks",{
      headers:this.createAuthorizationHeader()
    })
  }

  updateStatuss(id:number,status:string):Observable<any>{
    return this.http.put(BASE_URL+`/task/${id}/${status}`,{
      headers:this.createAuthorizationHeader()
    })
  }
  

   private createAuthorizationHeader():HttpHeaders{
    return new HttpHeaders().set(
      "Authorization","Bearer "+StorageService.getToken()
    )
  }
}
