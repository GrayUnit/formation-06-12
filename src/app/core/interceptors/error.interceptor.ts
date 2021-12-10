import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(
        () => {
          if(request.method == "POST") {
            this.toastr.success("Création réussie");
          }
        }
      ),
      catchError(
        (err) => {
          this.toastr.error(err.error);
          if(err.status == 400) {
            //this.toastr.error(err);
          } else if (err.status == 404) {

          }
          return throwError(err);
        }
      )
    );
  }
}
