import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signout',
  standalone: true,
  imports: [],
  templateUrl: './signout.component.html',
  styleUrl: './signout.component.scss'
})
export class SignoutComponent {

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.logout();
  }

}
