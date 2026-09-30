import { Component } from '@angular/core';
import { EmployeeService } from './employee';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  employees: any[] = [];
  constructor(private employeeService: EmployeeService) {
    this.employees = this.employeeService.getEmployees();
  }
}
