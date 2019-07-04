import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {
  username1: any;
  psd1: any;
  mobileno1: any;

  constructor() { }

  ngOnInit() {
  }
  receive(e) {
    debugger
    console.log(e);
    this.username1 = e.username1;
    console.log(this.username1);
    this.psd1 = e.psd1;
    console.log(this.psd1);
    this.mobileno1 = e.mobileno1;
    console.log(this.mobileno1);
  }
}
