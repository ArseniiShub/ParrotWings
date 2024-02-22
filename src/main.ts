import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { httpInterceptorProviders } from "./app/_helpers/http.interceptor";

bootstrapApplication(
  AppComponent,
  { providers: httpInterceptorProviders }
).catch((err) => console.error(err));
