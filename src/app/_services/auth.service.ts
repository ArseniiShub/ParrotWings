import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  register(username: string, password: string, email: string) {
    return this.http.post<HttpResponse<any>>(`${ this.baseURL }/users`, { username, password, email  });
  }

  login(email: string, password: string) {
    return this.http.post<HttpResponse<any>>(`${ this.baseURL }/sessions/create`, { email, password });
  }

  logout(email: string, password: string) {
    return this.http.post<HttpResponse<any>>(`${ this.baseURL }/sessions/create`, { email, password });
  }
}
