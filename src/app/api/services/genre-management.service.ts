/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createGenre } from '../fn/genre-management/create-genre';
import { CreateGenre$Params } from '../fn/genre-management/create-genre';


/**
 * Management žánrů - operace pro admina.
 */
@Injectable({ providedIn: 'root' })
export class GenreManagementService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createGenre()` */
  static readonly CreateGenrePath = '/api/genre/management/genre';

  /**
   * Vytvoření žánru.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createGenre()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createGenre$Response(params?: CreateGenre$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return createGenre(this.http, this.rootUrl, params, context);
  }

  /**
   * Vytvoření žánru.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createGenre$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createGenre(params?: CreateGenre$Params, context?: HttpContext): Observable<void> {
    return this.createGenre$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
