import { environment } from 'src/environments/environment';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ReposComponent } from './components/repos/repos.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';


// http client
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

//firebase related imports

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

//toast

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReposComponent,
    UserCardComponent,
    HomeComponent,
    PageNotFoundComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [BrowserModule,
     AppRoutingModule,
     HttpClientModule,
     BrowserAnimationsModule,
     ToastrModule.forRoot(),
     FormsModule,
     AngularFireModule.initializeApp(environment.firebase),
     AngularFireAuthModule
    
    
    
    
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
