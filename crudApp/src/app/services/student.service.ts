import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
interface student{
  id: string,
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
  deleteStudent(id:string){
    // pour tous usage de variable pour de raison de lisibilité et de flexibilité utiliser des backticks
    return this.httpclient.delete(`http://localhost:3000/students/${id}`);
  }
  updateStudent(id : string,data:any){
    return this.httpclient.put(`http://localhost:3000/students/${id}`,data);
  }
}
