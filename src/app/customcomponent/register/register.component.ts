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
  email: any;
  pasd: any;
  cpsd: any;
  date: any;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(uform) {
    debugger
    //console.log(userform);
    const reg = {
      username1: this.username,
      psd1: this.psd,
      mobileno1: this.mobileno,
      email1: this.email,
      pasd1: this.pasd,
      cpsd1: this.cpsd,
      date1: this.date
    }
    this.registerData.emit(reg);
  }
}
