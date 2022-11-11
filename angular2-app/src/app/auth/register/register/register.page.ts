import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('f') form!: NgForm;
  error = undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService
      .signup(this.form.value)
      .subscribe((data) => console.log(data));
  }
}
