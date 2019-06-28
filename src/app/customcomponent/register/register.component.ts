import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() registerData = new EventEmitter();
  username: any;
  psd: any;
  constructor() { }

  ngOnInit() {
  }
  register() {
    const reg = {
      username1: this.username,
      psd1: this.psd,
    }
    this.registerData.emit(reg);
  }

}
