import { NgModule } from "@angular/core";
import { EmployeeFormComponent } from "./employee-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    RouterModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule, 
    EmployeeFormComponent
  ],

})

export class EmployeeFormModule { }
