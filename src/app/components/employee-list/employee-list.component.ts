import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
    employees: any[] = [];
    errorMes: string;
    constructor(private _empServices: EmployeeService) {}

    ngOnInit() {
        this._empServices.getEmployees().subscribe(data => (this.employees = data), err => (this.errorMes = err));
    }
}
