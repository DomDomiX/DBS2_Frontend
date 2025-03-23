/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ModelsBook } from '../../models/models-book';

export interface GetBookById$Params {
  id: number;
}

export function getBookById(http: HttpClient, rootUrl: string, params: GetBookById$Params, context?: HttpContext): Observable<StrictHttpResponse<ModelsBook>> {
  const rb = new RequestBuilder(rootUrl, getBookById.PATH, 'get');
  if (params) {
    rb.query('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ModelsBook>;
    })
  );
}

getBookById.PATH = '/api/book';
