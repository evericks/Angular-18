import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { CommonModule } from '@angular/common';
import { Student, StudentCreate } from './student.type';

@Component({
    selector: 'student',
    templateUrl: './student.component.html',
    standalone: true,
    imports: [CommonModule]
})
export class StudentComponent implements OnInit {

    students: Student[] = [];

    constructor(
        private _studentService: StudentService
    ) { }

    ngOnInit(): void {
        this.loadStudentData();
    }

    loadStudentData() {
        this._studentService.getStudents()
            // Lang nghe khi BE tra ket qua
            .subscribe({
                next: (result) => {
                    // Khi ket qua tra ve thanh cong 200 201 204

                    this.students = result;
                    console.log(this.students);
                },

                error: (error) => {
                    // Khi ket qua tra ve that bai 404 400 415 500

                    // console.log('error');


                },
                complete: () => {
                    // Khi co ket qua tra ve

                }
            });
    }

    createStudent() {
        const student: StudentCreate = {
            name: 'Ngọc Trinh',
            age: 37,
            email: 'trinhlonmup@gmail.com',
            phone: '0348040899'
        }

        this._studentService.createStudent(student).subscribe({
            next: (result) => {
                // Khi ket qua tra ve thanh cong 200 201 204
                console.log(result);

                // Load data ngu
                this.loadStudentData();
            },

            error: (error) => {
                // Khi ket qua tra ve that bai 404 400 415 500

            },
            complete: () => {
                // Khi co ket qua tra ve

            }
        });
    }


    deleteStudent(id: string) {
        this._studentService.deleteStudent(id).subscribe({
            next: (result) => {
                // Khi ket qua tra ve thanh cong 200 201 204
                console.log(result);

                // Load data ngu
                this.loadStudentData();
            },

            error: (error) => {
                // Khi ket qua tra ve that bai 404 400 415 500
                console.log(error);

            },
            complete: () => {
                // Khi co ket qua tra ve

            }
        });
    }


}
