import { ApiService } from './../http/api.service';
import { AuthenticationService } from './../authentication/authentication.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() user: User;

  user$: Observable<User>;

  constructor(private authenticationService: AuthenticationService, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  onSubmit(): void {
    if (this.user.login !== undefined || this.user.password !== undefined) {
      if (this.user.login.length > 0 || this.user.password.length > 0) {
        this.user$ = this.apiService.getUser(this.user.login, this.user.password);
        this.user$.subscribe(user => {
          if (user !== undefined) {
            this.user = user;
            this.authenticationService.user = user;
            this.authenticationService.setState(true);
            this.router.navigateByUrl('/');
          }
        });
      }
    }
  }

  checkState(): boolean {
    return this.authenticationService.getState();
  }
  onLogout(): void {
    this.user = new User();
    this.authenticationService.user = new User();
    this.authenticationService.setState(false);
    alert('Zostałaś/eś wylogowana/y.');
    this.router.navigateByUrl('');

  }
}
