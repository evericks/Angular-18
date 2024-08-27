import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentProComponent } from './student-pro/student-pro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentProComponent],
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  name: string | null | 'Dcm' | 'Cmm' | number = null;

  private _address: string = 'Vinhomes';

  // Thang chay dau tien, truoc ca ngOnInit
  // DI

  // Khi no duoc sinh ra
  ngOnInit(): void {
  }

  // Khi tao da render noi dung
  ngAfterViewInit(): void {
  }

  constructor() {
  }

  ngOnDestroy(): void {

  }
}
