import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor() {}

  focusedInputField(element: HTMLElement) {
    element.classList.add('active');
  }

  bluredInputField(element: HTMLElement) {
    element.classList.remove('active');
  }
}
