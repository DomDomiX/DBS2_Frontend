/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addBookToWishlist } from '../fn/wishlist/add-book-to-wishlist';
import { AddBookToWishlist$Params } from '../fn/wishlist/add-book-to-wishlist';
import { getAllBooksInWishlist } from '../fn/wishlist/get-all-books-in-wishlist';
import { GetAllBooksInWishlist$Params } from '../fn/wishlist/get-all-books-in-wishlist';
import { isBookInWishlist } from '../fn/wishlist/is-book-in-wishlist';
import { IsBookInWishlist$Params } from '../fn/wishlist/is-book-in-wishlist';
import { ModelsBook } from '../models/models-book';
import { ModelsTrueFalse } from '../models/models-true-false';
import { removeBookFromWishlist } from '../fn/wishlist/remove-book-from-wishlist';
import { RemoveBookFromWishlist$Params } from '../fn/wishlist/remove-book-from-wishlist';


/**
 * Seznam přání
 */
@Injectable({ providedIn: 'root' })
export class WishlistService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addBookToWishlist()` */
  static readonly AddBookToWishlistPath = '/api/wishlist';

  /**
   * Přidání knihy do seznamu přání.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addBookToWishlist()` instead.
   *
   * This method doesn't expect any request body.
   */
  addBookToWishlist$Response(params: AddBookToWishlist$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return addBookToWishlist(this.http, this.rootUrl, params, context);
  }

  /**
   * Přidání knihy do seznamu přání.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addBookToWishlist$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addBookToWishlist(params: AddBookToWishlist$Params, context?: HttpContext): Observable<void> {
    return this.addBookToWishlist$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `removeBookFromWishlist()` */
  static readonly RemoveBookFromWishlistPath = '/api/wishlist';

  /**
   * Odstranění knihy z seznamu přání.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeBookFromWishlist()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeBookFromWishlist$Response(params: RemoveBookFromWishlist$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return removeBookFromWishlist(this.http, this.rootUrl, params, context);
  }

  /**
   * Odstranění knihy z seznamu přání.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `removeBookFromWishlist$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeBookFromWishlist(params: RemoveBookFromWishlist$Params, context?: HttpContext): Observable<void> {
    return this.removeBookFromWishlist$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAllBooksInWishlist()` */
  static readonly GetAllBooksInWishlistPath = '/api/wishlist/all';

  /**
   * Vrácení všech knih v seznamu přání.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllBooksInWishlist()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllBooksInWishlist$Response(params?: GetAllBooksInWishlist$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ModelsBook>>> {
    return getAllBooksInWishlist(this.http, this.rootUrl, params, context);
  }

  /**
   * Vrácení všech knih v seznamu přání.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllBooksInWishlist$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllBooksInWishlist(params?: GetAllBooksInWishlist$Params, context?: HttpContext): Observable<Array<ModelsBook>> {
    return this.getAllBooksInWishlist$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ModelsBook>>): Array<ModelsBook> => r.body)
    );
  }

  /** Path part for operation `isBookInWishlist()` */
  static readonly IsBookInWishlistPath = '/api/wishlist/exists';

  /**
   * Vrátí zda je kniha v seznamu přání.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `isBookInWishlist()` instead.
   *
   * This method doesn't expect any request body.
   */
  isBookInWishlist$Response(params: IsBookInWishlist$Params, context?: HttpContext): Observable<StrictHttpResponse<ModelsTrueFalse>> {
    return isBookInWishlist(this.http, this.rootUrl, params, context);
  }

  /**
   * Vrátí zda je kniha v seznamu přání.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `isBookInWishlist$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  isBookInWishlist(params: IsBookInWishlist$Params, context?: HttpContext): Observable<ModelsTrueFalse> {
    return this.isBookInWishlist$Response(params, context).pipe(
      map((r: StrictHttpResponse<ModelsTrueFalse>): ModelsTrueFalse => r.body)
    );
  }

}
