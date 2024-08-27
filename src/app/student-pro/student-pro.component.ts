import { Component, OnInit } from '@angular/core';
import { StudentProService } from './student-pro.service';
import { Observable, take } from 'rxjs';
import { Student, StudentCreate } from '../student/student.type';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'student-pro',
    templateUrl: './student-pro.component.html',
    standalone: true,
    imports: [CommonModule]
})
export class StudentProComponent implements OnInit {

    students$: Observable<Student[]>;

    constructor(private _studentProService: StudentProService) { }

    ngOnInit(): void {

        this.students$ = this._studentProService.students$;


        // console.warn('Truoc khi goi subscribe ');


        // console.warn('Sau khi goi subscribe xong roi');

        // console.warn('Lay data tu API');

        this._studentProService.getStudents().subscribe();



        this.students$.subscribe(value => {
            console.log(value);
        });

    }


    createStudent() {
        const student: StudentCreate = {
            name: 'Ngọc Trinh',
            age: 37,
            email: 'trinhlonmuppromax@gmail.com',
            phone: '0348040899'
        }

        this._studentProService.createStudent(student).subscribe({
            next: (result) => {
                // Khi ket qua tra ve thanh cong 200 201 204
                console.log(result);

                // Load data ngu
                // this.loadStudentData();
            },

            error: (error) => {
                // Khi ket qua tra ve that bai 404 400 415 500

            },
            complete: () => {
                // Khi co ket qua tra ve

            }
        });
    }
}
