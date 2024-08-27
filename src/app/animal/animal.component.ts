import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PipeModule } from './pipe.module';

@Component({
    selector: 'animal',
    templateUrl: './animal.component.html',
    standalone: true,
    styleUrls: ['animal.component.css'],
    imports: [CommonModule, PipeModule]
})
export class AnimalComponent implements OnInit {

    animals: any[] = [
        { name: 'Lion', status: 'Endangered', age: 8 },
        { name: 'Elephant', status: 'Vulnerable', age: 15 },
        { name: 'Panda', status: 'Endangered', age: 5 },
        { name: 'Kangaroo', status: 'Least Concern', age: 3 },
        { name: 'Dolphin', status: 'Near Threatened', age: 10 }
    ];

    //Ngay
    dateTime = new Date();

    //Number
    salary: number = 12600000;

    constructor() { }

    ngOnInit(): void {


        setInterval(() => {
            this.dateTime = new Date();
        }, 1000);

    }
}
