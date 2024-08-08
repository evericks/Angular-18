import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, ContactComponent],
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
    console.log('Tao da duoc sinh ra');
    setTimeout(() => {
      this.name = 5;
    }, 0)
  }

  // Khi tao da render noi dung
  ngAfterViewInit(): void {
    console.warn('Tao dang render noi dung ra template');
  }

  constructor() {
    console.log('Tao la constructor');
  }

  ngOnDestroy(): void {

  }
}
