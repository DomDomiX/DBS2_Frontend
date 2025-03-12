/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ModelsAuthor } from '../../models/models-author';

export interface GetAllAuthors$Params {
}

export function getAllAuthors(http: HttpClient, rootUrl: string, params?: GetAllAuthors$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ModelsAuthor>>> {
  const rb = new RequestBuilder(rootUrl, getAllAuthors.PATH, 'post');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ModelsAuthor>>;
    })
  );
}

getAllAuthors.PATH = '/api/author/all';
