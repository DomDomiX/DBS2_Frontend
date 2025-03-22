/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ModelsBook } from '../../models/models-book';

export interface GetAllBooks$Params {
}

export function getAllBooks(http: HttpClient, rootUrl: string, params?: GetAllBooks$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ModelsBook>>> {
  const rb = new RequestBuilder(rootUrl, getAllBooks.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ModelsBook>>;
    })
  );
}

getAllBooks.PATH = '/api/book/all';
