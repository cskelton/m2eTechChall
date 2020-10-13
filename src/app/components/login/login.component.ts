import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signUpForm: FormGroup;
  logInForm: FormGroup;

  formTypes = [{label: 'Sign Up', value: 'signUp'}, {label: 'Log In', value: 'logIn'}];
  selectedForm = 'signUp';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required])
    });
    this.logInForm = this.fb.group({
      emailAddress: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required])
    });
  }

  toggleForm(value): void {
    this.selectedForm = value;
  }

  submitForm(type): void {
    switch (type) {
      case 'signUp':
        break;
      case 'logIn':
        break;
      default:
        break;
    }
  }

  isFieldValid(field: string): any {
    return !this.signUpForm.get(field).valid && this.signUpForm.get(field).touched;
  }

  displayFieldCss(field: string): any {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }


}
