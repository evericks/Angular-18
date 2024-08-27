import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from './employee.type';
import { vietnamPhoneValidator } from '../validators/phone.validator';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,

        // Import modules cho date picker
        MatDatepickerModule,
        MatNativeDateModule,

        // Form
        FormsModule,
        ReactiveFormsModule
    ]
})
export class EmployeeComponent implements OnInit {

    employees: Employee[] = [];

    createEmployeeForm: FormGroup;

    //DI
    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.initCreateEmployeeForm();
    }

    private initCreateEmployeeForm() {
        this.createEmployeeForm = this._formBuilder.group({
            name: [null, [Validators.required]],
            email: ['votantai@gmail.com', [Validators.required]],
            address: [null, [Validators.required]],
            phone: [null, [Validators.required, vietnamPhoneValidator()]],
            salary: [0, [Validators.required]],
            birthdate: [null, [Validators.required]],
            joindate: [null, [Validators.required]]
        });
    }

    public createEmployee() {
        if (this.createEmployeeForm.valid) {
            this.employees.push(this.createEmployeeForm.value);
            console.log(this.employees);
        }
    }
}
