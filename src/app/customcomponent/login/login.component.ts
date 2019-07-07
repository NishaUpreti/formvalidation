import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserserviceService } from 'src/app/commanservice/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usernameR: any;
  psdR: any;
  loginform: FormGroup;
  users: any;
  constructor(private _fb: FormBuilder, private dataservice: UserserviceService) {
    this.createForm();
  }
  createForm() {
    this.loginform = this._fb.group({
      username: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]

    })

  }
  get username1() {
    return this.loginform.controls.username;
  }
  get password1() {
    return this.loginform.controls.password;
  }
  submitForm() {
    if (this.loginform.valid) {
      alert("form is valid");
    }
    else {
      alert("form invalid");
    }
  }
  recieve(el) {
    debugger
    console.log(el);
    this.usernameR = el.username1;
    console.log(this.usernameR);
    this.psdR = el.psd1;
    console.log(this.psdR);

  }
  ngOnInit() {
    debugger
    this.users = this.dataservice.getusers();
    console.log(this.users);
  }

}
