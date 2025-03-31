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

import { approveReview } from '../fn/review-management/approve-review';
import { ApproveReview$Params } from '../fn/review-management/approve-review';
import { getReviewsToApprove } from '../fn/review-management/get-reviews-to-approve';
import { GetReviewsToApprove$Params } from '../fn/review-management/get-reviews-to-approve';
import { ModelsReview } from '../models/models-review';


/**
 * Management recenzí - operace pro admina a review approvera.
 */
@Injectable({ providedIn: 'root' })
export class ReviewManagementService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `approveReview()` */
  static readonly ApproveReviewPath = '/api/review/management/approve';

  /**
   * Schvalování/smazání recenzí.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `approveReview()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  approveReview$Response(params?: ApproveReview$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return approveReview(this.http, this.rootUrl, params, context);
  }

  /**
   * Schvalování/smazání recenzí.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `approveReview$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  approveReview(params?: ApproveReview$Params, context?: HttpContext): Observable<void> {
    return this.approveReview$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getReviewsToApprove()` */
  static readonly GetReviewsToApprovePath = '/api/review/management/toApprove';

  /**
   * Vrátí recenze ke schválení.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReviewsToApprove()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReviewsToApprove$Response(params?: GetReviewsToApprove$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ModelsReview>>> {
    return getReviewsToApprove(this.http, this.rootUrl, params, context);
  }

  /**
   * Vrátí recenze ke schválení.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getReviewsToApprove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReviewsToApprove(params?: GetReviewsToApprove$Params, context?: HttpContext): Observable<Array<ModelsReview>> {
    return this.getReviewsToApprove$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ModelsReview>>): Array<ModelsReview> => r.body)
    );
  }

}
