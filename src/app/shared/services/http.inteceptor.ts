import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PmHttpInterceptor implements HttpInterceptor {

  constructor() {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = `eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2xvZ2luIiwic3ViIjoiYWRtaW4iLCJleHAiOjE2ODIxOTc0NjQsImlhdCI6MTY4MjExMTA2NCwicm9sZXMiOltdfQ.h_Z_aSsHYL0vLIBqlrGYYLfmaNHjRyM3cKqRg4jDJcQ`;
    //localStorage.getItem('token');

    if (authToken) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`),
        url: `http://localhost:8080/${req.url}`
      });
      return next.handle(authReq);
    }

    return next.handle(req);
  }
}