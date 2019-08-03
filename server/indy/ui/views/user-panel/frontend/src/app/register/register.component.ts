import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ValidateService } from 'app/services/validate.service';
import { AuthenticationService } from 'app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  hide = true;
  constructor(
    private validateService: ValidateService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    const user = {
      name: this.f.name.value,
      email: this.f.email.value,
      username: this.f.username.value,
      password: this.f.password.value
    }
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.openSnackBar('Fill missing fields');
      return;
    }
    // Required Fields
    if (!this.validateService.validateRegister(user)) {
      this.openSnackBar('Fill required fields');
      return false;
    }
    // // Validate Email
    // if (!this.validateService.validateEmail(user.email)) {
    //   this.openSnackBar('Invalid email');
    //   return false;
    // }
    this.loading = true;
    // Register user
    this.authenticationService.registerUser(user)
      .subscribe(data => {
        if (data['success)']) {
          this.openSnackBar(data['msg']);
        } else {
          this.openSnackBar(data['msg']);
          this.router.navigate(['/login']);
        }
      },
        error => {
          console.log(error)
          this.openSnackBar(error);
        }
      );

  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Close', {
      duration: 5000,
    });
  }

}
