import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap, take } from 'rxjs';
import { Student, StudentCreate } from '../student/student.type';

// State management

@Injectable({
    providedIn: 'root'
})
export class StudentProService {

    // BahaviorSubject & Observable

    // => State chi duoc xu ly o service


    // students: Student[] = [];


    private _students: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);
    private _student: BehaviorSubject<Student | null> = new BehaviorSubject<Student | null>(null);


    // Lay gia tri cua student va subscribe no neu muon lang nghe su thay doi moi khi _students duoc next value moi
    // Dau $ duoc dat sau ten bien neu bien do la bien bat dong bo
    get students$(): Observable<Student[]> {
        return this._students.asObservable();
    }

    get student$(): Observable<Student | null> {
        return this._student.asObservable();
    }

    constructor(private _httpClient: HttpClient) {

    }

    getStudents() {
        // Quan trong cua buoi nay
        // RxJs
        return this._httpClient.post<Student[]>('/api/students/filter', {}).pipe(take(1), switchMap((students) => {

            // API moi tra ve
            // console.log(students);

            this._students.next(students);

            return students;
        }));
    }

    getStudentById(id: string) {
        return this.students$.pipe(
            take(1),
            switchMap(() =>
                this._httpClient.get<Student>('/api/students/' + id).pipe(
                    map(student => {

                        // Khi API tra ve 1 thang vua duoc tao moi
                        this._student.next(student);

                        return student;
                    })
                )
            )
        );
    }

    createStudent(student: StudentCreate) {
        return this.students$.pipe(
            take(1),
            switchMap((students) =>
                this._httpClient.post<Student>('/api/students', student).pipe(
                    map(newStudent => {

                        // Khi API tra ve 1 thang vua duoc tao moi
                        const newListStudent = [...students, newStudent];
                        this._students.next(newListStudent);

                        return newStudent;
                    })
                )
            )
        );
    }

    deleteStudent(id: string) {
        return this._httpClient.delete<any>('/api/students/' + id);
    }
}