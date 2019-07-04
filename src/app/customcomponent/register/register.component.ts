import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() registerData = new EventEmitter();
  username: any;
  psd: any;
  mail: string;
  mobileno: any;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    debugger
    //console.log(userform);
    const reg = {
      username1: this.username,
      psd1: this.psd,
      mobileno1: this.mobileno,

    }
    this.registerData.emit(reg);
  }
}
