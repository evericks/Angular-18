import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'child',
    templateUrl: './child.component.html',
    standalone: true
})
export class ChildComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
