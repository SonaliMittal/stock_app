import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { AuthService } from 'src/app/auth.service';
import { Routes, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  ngOnInit() {
  }

  firstName = new FormControl(null, [Validators.required]);

  lastName = new FormControl(null, [Validators.required]);
  username = new FormControl(null, [Validators.required, Validators.email]);
  password = new FormControl(null, [
    Validators.required,
    Validators.minLength(6)
  ]);

  cnfpassword = new FormControl(null, [Validators.required, this.matchPass]);
  registerForm: FormGroup;
  register:boolean;
  constructor(private fb: FormBuilder,private router:Router, private authService: AuthService) {
    this.registerForm = this.fb.group({
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  matchPass(input: FormControl) {
    if (input.parent && input.parent.controls) {
      const matchPassword = input.value === input.parent.value["password"];
      return matchPassword ? null : {};
    }
  }
  onRegister() {
    console.log(this.registerForm);
    this.authService.onRegister(this.registerForm.value).subscribe(()=>{
      this.router.navigate(['/login'])
      console.log("done!!!!")
    })
  }

}
