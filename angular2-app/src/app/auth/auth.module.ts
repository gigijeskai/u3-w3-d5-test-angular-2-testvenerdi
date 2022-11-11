import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login/login/login/login.page';
import { RegisterPage } from './register/register/register.page';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPage, RegisterPage],
  imports: [CommonModule, FormsModule],
  exports: [LoginPage, RegisterPage],
})
export class AuthModule {}
