import { Component, OnInit } from '@angular/core';
import { StudentProService } from '../../../../student-pro/student-pro.service';
import { Observable } from 'rxjs';
import { Student } from '../../../../student/student.type';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'student-parent-detail',
    templateUrl: './student-parent-detail.component.html',
    standalone: true,
    imports: [CommonModule]
})
export class StudentParentDetailComponent implements OnInit {

    student$: Observable<Student | null>;

    constructor(private _studentService: StudentProService) { }

    ngOnInit(): void {

        this.student$ = this._studentService.student$;

    }
}
