import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASE_URL = 'http://localhost:8080/api/admin';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(BASE_URL + '/users', {
      headers: this.createAuthorizationHeader(),
    });
  }

  getTasks():Observable<any>{
    return this.http.get(BASE_URL+"/task",{
      headers:this.createAuthorizationHeader(),
    })
  }

  postTask(taskDTO:any):Observable<any>{
    return this.http.post(BASE_URL+'/task',taskDTO,{
      headers:this.createAuthorizationHeader()
    })
  }

  deleteTask(id:number):Observable<any>{
    return this.http.delete(BASE_URL+"/task/"+id,{
      headers:this.createAuthorizationHeader()
    })
  }

  getTaskById(id:number):Observable<any>{
    console.log("Gọi getTaskById với id =", id);
    return this.http.get(BASE_URL+"/task/"+id,{
      headers:this.createAuthorizationHeader()
    })
  }

  updateTask(id:number,taskDTO:any):Observable<any>{
    return this.http.put(BASE_URL+`/task/${id}`,taskDTO,{
      headers:this.createAuthorizationHeader()
    })
  }

  searchTask(title:string):Observable<any>{
    return this.http.get(BASE_URL+`/task/${title}`,{
      headers:this.createAuthorizationHeader()
    })
  }

  private createAuthorizationHeader():HttpHeaders{
    return new HttpHeaders().set(
      "Authorization","Bearer "+StorageService.getToken()
    )
  }
}
