/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { login } from '../fn/authentication/login';
import { Login$Params } from '../fn/authentication/login';
import { ModelsLoginResponse } from '../models/models-login-response';


/**
 * Přihlášení uživatele
 */
@Injectable({ providedIn: 'root' })
export class AuthenticationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `login()` */
  static readonly LoginPath = '/api/auth';

  /**
   * Přihlášení.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login$Response(params?: Login$Params, context?: HttpContext): Observable<StrictHttpResponse<ModelsLoginResponse>> {
    return login(this.http, this.rootUrl, params, context);
  }

  /**
   * Přihlášení.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `login$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login(params?: Login$Params, context?: HttpContext): Observable<ModelsLoginResponse> {
    return this.login$Response(params, context).pipe(
      map((r: StrictHttpResponse<ModelsLoginResponse>): ModelsLoginResponse => r.body)
    );
  }

}
