import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student, StudentCreate } from './student.type';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    /**
     *
     */
    constructor(private _httpClient: HttpClient) {
    }

    // Subscribe


    getStudents() {
        return this._httpClient.post<Student[]>('/api/students/filter', {})
    }

    createStudent(student: StudentCreate) {
        return this._httpClient.post<Student>('/api/students', student);
    }

    deleteStudent(id: string) {
        return this._httpClient.delete<any>('/api/students/' + id);
    }

}