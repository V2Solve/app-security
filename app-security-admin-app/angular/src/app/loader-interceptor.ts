import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoaderServiceService } from 'src/app/loader-service.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })
export class LoaderInterceptor implements HttpInterceptor 
{
    private count = 0;
    
    constructor(private loaderService: LoaderServiceService) 
    { 
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {
        // console.log("Intercepted..");
        if (this.count === 0) {
            this.loaderService.setHttpProgressStatus(true);
          }
          this.count++;
          return next.handle(req).pipe(
            finalize(() => {
              this.count--;
              if (this.count === 0) {
                this.loaderService.setHttpProgressStatus(false);
              }
            }));
    }
}
