import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './auth/login/login/login/login.page';
import { RegisterPage } from './auth/register/register/register.page';
import { ActivePostsPage } from './pages/active-posts/active-posts.page';
import { HomePage } from './pages/home/home.page';
import { InactivePostsPage } from './pages/inactive-posts/inactive-posts.page';
import { UsersDetailsPage } from './pages/users-details/users-details.page';
import { UsersPage } from './pages/users/users.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'active-posts',
    component: ActivePostsPage,
  },
  {
    path: 'inactive-posts',
    component: InactivePostsPage,
  },
  {
    path: 'users',
    component: UsersPage,
  },
  {
    path: 'users-details',
    component: UsersDetailsPage,
  },
  {
    path: 'register',
    component: RegisterPage,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
