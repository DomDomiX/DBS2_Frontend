/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getAllBooks } from '../fn/book/get-all-books';
import { GetAllBooks$Params } from '../fn/book/get-all-books';
import { getBookById } from '../fn/book/get-book-by-id';
import { GetBookById$Params } from '../fn/book/get-book-by-id';
import { ModelsBook } from '../models/models-book';
import { searchBooks } from '../fn/book/search-books';
import { SearchBooks$Params } from '../fn/book/search-books';


/**
 * Knihy
 */
@Injectable({ providedIn: 'root' })
export class BookService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getBookById()` */
  static readonly GetBookByIdPath = '/api/book';

  /**
   * Vrátí knihu podle ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBookById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBookById$Response(params: GetBookById$Params, context?: HttpContext): Observable<StrictHttpResponse<ModelsBook>> {
    return getBookById(this.http, this.rootUrl, params, context);
  }

  /**
   * Vrátí knihu podle ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBookById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBookById(params: GetBookById$Params, context?: HttpContext): Observable<ModelsBook> {
    return this.getBookById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ModelsBook>): ModelsBook => r.body)
    );
  }

  /** Path part for operation `getAllBooks()` */
  static readonly GetAllBooksPath = '/api/book/all';

  /**
   * Všechny knihy.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllBooks()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllBooks$Response(params?: GetAllBooks$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ModelsBook>>> {
    return getAllBooks(this.http, this.rootUrl, params, context);
  }

  /**
   * Všechny knihy.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllBooks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllBooks(params?: GetAllBooks$Params, context?: HttpContext): Observable<Array<ModelsBook>> {
    return this.getAllBooks$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ModelsBook>>): Array<ModelsBook> => r.body)
    );
  }

  /** Path part for operation `searchBooks()` */
  static readonly SearchBooksPath = '/api/book/search';

  /**
   * Vyhledávání knih.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchBooks()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchBooks$Response(params: SearchBooks$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ModelsBook>>> {
    return searchBooks(this.http, this.rootUrl, params, context);
  }

  /**
   * Vyhledávání knih.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `searchBooks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchBooks(params: SearchBooks$Params, context?: HttpContext): Observable<Array<ModelsBook>> {
    return this.searchBooks$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ModelsBook>>): Array<ModelsBook> => r.body)
    );
  }

}
