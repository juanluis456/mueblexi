import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // URL para registrar (CORREGIDA: Ahora dice 'register' para que coincida con Python)
  private urlAPI = 'http://127.0.0.1:5001/api/register';
  
  // URL para iniciar sesión (Esta ya estaba bien)
  private urlLogin = 'http://127.0.0.1:5001/api/login';

  constructor(private http: HttpClient) { }

  // Función para registrar usuarios nuevos
  registrarUsuario(usuario: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.urlAPI, usuario, httpOptions);
  }

  // Función para iniciar sesión (Login)
  loginUsuario(credenciales: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.urlLogin, credenciales, httpOptions);
  }
}