import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  
  employees = [
    {
      id: 1,
      name: 'Divya',
      age: 25,
      designation: 'Software Developer',
      address: 'Bengaluru'
    },
    {
      id: 2,
      name: 'Ratna',
      age: 28,
      designation: 'Software Engineer',
      address: 'Chennai'
    },
    {
      id: 3,
      name: 'Vamsi',
      age: 30,
      designation: 'Project Manager',
      address: 'Mumbai'
    },
    {
      id: 4,
      name: 'Vaishnavi',
      age: 26,
      designation: 'UI Developer',
      address: 'Hyderabad'
    },
    {
      id: 5,
      name: 'Phani',
      age: 29,
      designation: 'Backend Developer',
      address: 'Pune'
    },
    {
      id: 6,
      name: 'Kalyan',
      age: 27,
      designation: 'QA Engineer',
      address: 'Bengaluru'
    },
    {
      id: 7,
      name: 'Anji',
      age: 32,
      designation: 'Team Lead',
      address: 'Delhi'
    },
    {
      id: 8,
      name: 'Neha',
      age: 24,
      designation: 'Junior Developer',
      address: 'Kolkata'
    },
    {
      id: 9,
      name: 'Lokeswar',
      age: 31,
      designation: 'Senior Developer',
      address: 'Hyderabad'
    },
    {
      id: 10,
      name: 'Pooja',
      age: 26,
      designation: 'Business Analyst',
      address: 'Mumbai'
    }
  ];

  getEmployees() {
    return this.employees;
  }
}
