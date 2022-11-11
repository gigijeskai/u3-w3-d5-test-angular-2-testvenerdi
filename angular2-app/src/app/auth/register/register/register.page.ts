import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('f') form!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form);
  }
}
