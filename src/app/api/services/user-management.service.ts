/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createUser } from '../fn/user-management/create-user';
import { CreateUser$Params } from '../fn/user-management/create-user';
import { deleteUsers } from '../fn/user-management/delete-users';
import { DeleteUsers$Params } from '../fn/user-management/delete-users';
import { getUsersByRoles } from '../fn/user-management/get-users-by-roles';
import { GetUsersByRoles$Params } from '../fn/user-management/get-users-by-roles';
import { ModelsUser } from '../models/models-user';
import { updateUser } from '../fn/user-management/update-user';
import { UpdateUser$Params } from '../fn/user-management/update-user';


/**
 * Management uživatelů - operace pro admina.
 */
@Injectable({ providedIn: 'root' })
export class UserManagementService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getUsersByRoles()` */
  static readonly GetUsersByRolesPath = '/api/user/management/byRoles';

  /**
   * Všichni uživatelé kteří nejsou zákaznící.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUsersByRoles()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsersByRoles$Response(params: GetUsersByRoles$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ModelsUser>>> {
    return getUsersByRoles(this.http, this.rootUrl, params, context);
  }

  /**
   * Všichni uživatelé kteří nejsou zákaznící.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUsersByRoles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsersByRoles(params: GetUsersByRoles$Params, context?: HttpContext): Observable<Array<ModelsUser>> {
    return this.getUsersByRoles$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ModelsUser>>): Array<ModelsUser> => r.body)
    );
  }

  /** Path part for operation `createUser()` */
  static readonly CreateUserPath = '/api/user/management/user';

  /**
   * Vytvoření uživatele s rolí databaseManager nebo reviewApprover.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser$Response(params?: CreateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return createUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Vytvoření uživatele s rolí databaseManager nebo reviewApprover.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser(params?: CreateUser$Params, context?: HttpContext): Observable<void> {
    return this.createUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `updateUser()` */
  static readonly UpdateUserPath = '/api/user/management/user';

  /**
   * Aktualizace uživatele.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser$Response(params?: UpdateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return updateUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Aktualizace uživatele.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser(params?: UpdateUser$Params, context?: HttpContext): Observable<void> {
    return this.updateUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `deleteUsers()` */
  static readonly DeleteUsersPath = '/api/user/management/users';

  /**
   * Mazání uživatelů.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUsers$Response(params: DeleteUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * Mazání uživatelů.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUsers(params: DeleteUsers$Params, context?: HttpContext): Observable<void> {
    return this.deleteUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
