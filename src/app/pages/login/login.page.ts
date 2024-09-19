import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor() {}

  focusedInputField() {
    console.log('Input FIeld');
    console.log(this);
  }
}
