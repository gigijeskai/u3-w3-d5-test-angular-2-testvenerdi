import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer/footer/footer.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { HomePage } from './pages/home/home.page';
import { ActivePostsPage } from './pages/active-posts/active-posts.page';
import { InactivePostsPage } from './pages/inactive-posts/inactive-posts.page';
import { PostDetailsPage } from './pages/post-details/post-details.page';
import { UsersDetailsPage } from './pages/users-details/users-details.page';
import { UsersPage } from './pages/users/users.page';
import { AuthModule } from './auth/auth.module';
import { PostCardComponent } from './components/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    NavbarComponent,
    HomePage,
    ActivePostsPage,
    InactivePostsPage,
    PostDetailsPage,
    UsersDetailsPage,
    UsersPage,
    PostCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
