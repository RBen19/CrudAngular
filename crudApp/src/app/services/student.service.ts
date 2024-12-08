import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
interface student{
  id: number,
  nom: string,
  prenom: string,
  classe: string
}
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpclient:HttpClient) { }
  addStudent(data:any){
    return this.httpclient.post('http://localhost:3000/students',data);
  }
  getAllStudents(){
    return this.httpclient.get<student[]>('http://localhost:3000/students');
  }
}
