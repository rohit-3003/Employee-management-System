import { Component} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule} from '@angular/router';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports:[
      ReactiveFormsModule,
      MatInputModule,
      RouterModule,
      MatIconModule,
      CommonModule,
      FormsModule,
      MatFormFieldModule,
      MatButtonModule,
      MatCardModule, 
      
  ],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})

export class EmployeeFormComponent {
  employeeForm: FormGroup; // Reactive form for employee details
  
  constructor(
    private fb: FormBuilder, // FormBuilder for creating forms
    private employeeService: EmployeeService, // Service for employee operations
    private router: Router // Router for navigation
  ) {
    // Initialize the reactive form with validators
    this.employeeForm = this.fb.group({
      name: ['', Validators.required], // Name field is required
      email: ['', [Validators.required, Validators.email]], // Email is required and must be valid
      department: [''], // Position selection is required
      phone: [''],
      designation: ['']
    });
  }

  /**
   * Handles form submission. Saves employee data if the form is valid.
   */
  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.employeeService.createEmployee(this.employeeForm.value).subscribe(() => {
        console.log('Employee saved:', this.employeeForm.value);
        this.router.navigate(['/employees']); // Navigate to the employee list
      });
    } else {
      console.error('Form is invalid');
      alert('Please fill out all required fields correctly.'); // Notify user of invalid form
    }
  }

  /**
   * Resets the form to its initial state.
   */
  onReset(): void {
    this.employeeForm.reset();
  }

  /**
   * Helper method to check if a form control is invalid.
   * @param controlName Name of the control to check
   * @returns True if the control is invalid and touched
   */
  isControlInvalid(controlName: string): boolean {
    const control = this.employeeForm.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }
}
