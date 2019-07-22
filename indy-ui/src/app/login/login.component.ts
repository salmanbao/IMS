import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'app/services/authentication.service';
import { first } from 'rxjs/operators';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom'
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    hide = true;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private snackBar: MatSnackBar,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            orgName: ['', Validators.required]
        });

        // reset login status
        this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    if (data['success']) {
                        this.router.navigateByUrl('/dashboard');
                    } else {
                        this.openSnackBar(data['message']);
                        this.loading = false;
                    }

                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }

    openSnackBar(message: string) {
        this.snackBar.open(message, 'Close', {
          duration: 1000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }

}
