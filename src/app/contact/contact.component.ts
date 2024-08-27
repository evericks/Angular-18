import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrls: ['contact.component.css']
})
export class ContactComponent implements OnInit {


    constructor() { }
    name: string = 'asasdasd';
    ngOnInit(): void { }


}




// Data Binding