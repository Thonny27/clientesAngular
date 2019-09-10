import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private url='http://localhost:8080/clientes/listclientes';
  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }

  getList(): Observable<any>{

    return this.http.get(this.url);
  }
  save(cliente:Cliente): Observable<any>{
    return this.http.post<Cliente>(this.url,cliente,{headers:this.httpHeaders});
  }

  delete(id:number): Observable<any>{
    return this.http.delete<Cliente>(this.url+`/${id}`,{headers:this.httpHeaders})
  }

  update(cliente:Cliente): Observable<any>{
    return this.http.put<Cliente>(this.url+`/${cliente.id}`,cliente,{headers:this.httpHeaders});
  }
}


