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

import { createDiscount } from '../fn/discount/create-discount';
import { CreateDiscount$Params } from '../fn/discount/create-discount';
import { getAllCustomerDiscounts } from '../fn/discount/get-all-customer-discounts';
import { GetAllCustomerDiscounts$Params } from '../fn/discount/get-all-customer-discounts';
import { ModelsDiscount } from '../models/models-discount';


/**
 * Slevy
 */
@Injectable({ providedIn: 'root' })
export class DiscountService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllCustomerDiscounts()` */
  static readonly GetAllCustomerDiscountsPath = '/api/discount';

  /**
   * Získání všech slev zákazníka.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCustomerDiscounts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCustomerDiscounts$Response(params?: GetAllCustomerDiscounts$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ModelsDiscount>>> {
    return getAllCustomerDiscounts(this.http, this.rootUrl, params, context);
  }

  /**
   * Získání všech slev zákazníka.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllCustomerDiscounts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCustomerDiscounts(params?: GetAllCustomerDiscounts$Params, context?: HttpContext): Observable<Array<ModelsDiscount>> {
    return this.getAllCustomerDiscounts$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ModelsDiscount>>): Array<ModelsDiscount> => r.body)
    );
  }

  /** Path part for operation `createDiscount()` */
  static readonly CreateDiscountPath = '/api/discount';

  /**
   * Vytvoření slevy.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createDiscount()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createDiscount$Response(params?: CreateDiscount$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return createDiscount(this.http, this.rootUrl, params, context);
  }

  /**
   * Vytvoření slevy.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createDiscount$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createDiscount(params?: CreateDiscount$Params, context?: HttpContext): Observable<void> {
    return this.createDiscount$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
