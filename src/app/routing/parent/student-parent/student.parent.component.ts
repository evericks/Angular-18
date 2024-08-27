import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'student-parent',
    templateUrl: './student-parent.component.html',
    standalone: true,
    imports: [RouterModule]
})
export class StudentParentComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
