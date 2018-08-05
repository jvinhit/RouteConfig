import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from '../models/employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService {
    private _url = '/assets/data/employees.json';
    constructor(private http: HttpClient) {}
    getEmployees(): Observable<IEmployee[]> {
        return this.http.get<IEmployee[]>(this._url).catch(this.errorHandle);
    }
    errorHandle(error: HttpErrorResponse) {
        return Observable.throw(`logMessage emp Services: ${error.message}` || 'server Eror');
    }
}
