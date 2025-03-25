/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getAllGenres } from '../fn/genre/get-all-genres';
import { GetAllGenres$Params } from '../fn/genre/get-all-genres';
import { ModelsGenre } from '../models/models-genre';


/**
 * Žánry
 */
@Injectable({ providedIn: 'root' })
export class GenreService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllGenres()` */
  static readonly GetAllGenresPath = '/api/genre/all';

  /**
   * Všechny žánry.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllGenres()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllGenres$Response(params?: GetAllGenres$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ModelsGenre>>> {
    return getAllGenres(this.http, this.rootUrl, params, context);
  }

  /**
   * Všechny žánry.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllGenres$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllGenres(params?: GetAllGenres$Params, context?: HttpContext): Observable<Array<ModelsGenre>> {
    return this.getAllGenres$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ModelsGenre>>): Array<ModelsGenre> => r.body)
    );
  }

}
