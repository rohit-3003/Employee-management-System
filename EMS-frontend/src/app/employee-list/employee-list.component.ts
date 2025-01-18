import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, RouterModule, MatButtonModule, MatPaginatorModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['id','name', 'email', 'department', 'actions']; // Columns to display
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data; // Ensure employees is properly assigned
      },
      error: (error) => {
        console.error('Error fetching employees:', error);
      },
      complete: () => {
        console.log('Employee data fetching complete.');
      },
    });
  }
  

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => (
      (this.employees = this.employees.filter((e) => e.id !== id)),
      (error: any) => console.error('Failed to delete employee:' , error)
    
    ));
  }
}
