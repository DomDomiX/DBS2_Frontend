/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addBookToCart } from '../fn/cart/add-book-to-cart';
import { AddBookToCart$Params } from '../fn/cart/add-book-to-cart';
import { getAllBooksInCart } from '../fn/cart/get-all-books-in-cart';
import { GetAllBooksInCart$Params } from '../fn/cart/get-all-books-in-cart';
import { getCartCount } from '../fn/cart/get-cart-count';
import { GetCartCount$Params } from '../fn/cart/get-cart-count';
import { isBookInCart } from '../fn/cart/is-book-in-cart';
import { IsBookInCart$Params } from '../fn/cart/is-book-in-cart';
import { ModelsBook } from '../models/models-book';
import { ModelsCount } from '../models/models-count';
import { ModelsTrueFalse } from '../models/models-true-false';
import { removeBookFromCart } from '../fn/cart/remove-book-from-cart';
import { RemoveBookFromCart$Params } from '../fn/cart/remove-book-from-cart';


/**
 * Košík
 */
@Injectable({ providedIn: 'root' })
export class CartService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addBookToCart()` */
  static readonly AddBookToCartPath = '/api/cart';

  /**
   * Přidání knihy do košíku.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addBookToCart()` instead.
   *
   * This method doesn't expect any request body.
   */
  addBookToCart$Response(params: AddBookToCart$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return addBookToCart(this.http, this.rootUrl, params, context);
  }

  /**
   * Přidání knihy do košíku.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addBookToCart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addBookToCart(params: AddBookToCart$Params, context?: HttpContext): Observable<void> {
    return this.addBookToCart$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `removeBookFromCart()` */
  static readonly RemoveBookFromCartPath = '/api/cart';

  /**
   * Odstranění knihy z košíku.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeBookFromCart()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeBookFromCart$Response(params: RemoveBookFromCart$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return removeBookFromCart(this.http, this.rootUrl, params, context);
  }

  /**
   * Odstranění knihy z košíku.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `removeBookFromCart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeBookFromCart(params: RemoveBookFromCart$Params, context?: HttpContext): Observable<void> {
    return this.removeBookFromCart$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAllBooksInCart()` */
  static readonly GetAllBooksInCartPath = '/api/cart/all';

  /**
   * Vrácení všech knih v košíku.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllBooksInCart()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllBooksInCart$Response(params?: GetAllBooksInCart$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ModelsBook>>> {
    return getAllBooksInCart(this.http, this.rootUrl, params, context);
  }

  /**
   * Vrácení všech knih v košíku.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllBooksInCart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllBooksInCart(params?: GetAllBooksInCart$Params, context?: HttpContext): Observable<Array<ModelsBook>> {
    return this.getAllBooksInCart$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ModelsBook>>): Array<ModelsBook> => r.body)
    );
  }

  /** Path part for operation `getCartCount()` */
  static readonly GetCartCountPath = '/api/cart/count';

  /**
   * Vrátí počet knih v košíku.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCartCount()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCartCount$Response(params?: GetCartCount$Params, context?: HttpContext): Observable<StrictHttpResponse<ModelsCount>> {
    return getCartCount(this.http, this.rootUrl, params, context);
  }

  /**
   * Vrátí počet knih v košíku.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCartCount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCartCount(params?: GetCartCount$Params, context?: HttpContext): Observable<ModelsCount> {
    return this.getCartCount$Response(params, context).pipe(
      map((r: StrictHttpResponse<ModelsCount>): ModelsCount => r.body)
    );
  }

  /** Path part for operation `isBookInCart()` */
  static readonly IsBookInCartPath = '/api/cart/exists';

  /**
   * Vrátí zda je kniha v košíku.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `isBookInCart()` instead.
   *
   * This method doesn't expect any request body.
   */
  isBookInCart$Response(params: IsBookInCart$Params, context?: HttpContext): Observable<StrictHttpResponse<ModelsTrueFalse>> {
    return isBookInCart(this.http, this.rootUrl, params, context);
  }

  /**
   * Vrátí zda je kniha v košíku.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `isBookInCart$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  isBookInCart(params: IsBookInCart$Params, context?: HttpContext): Observable<ModelsTrueFalse> {
    return this.isBookInCart$Response(params, context).pipe(
      map((r: StrictHttpResponse<ModelsTrueFalse>): ModelsTrueFalse => r.body)
    );
  }

}
