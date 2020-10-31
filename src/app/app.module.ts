import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {UserProfileComponent} from '../app/components/user-profile/user-profile.component'
import {FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { AuthGuard } from './guards/auth.guard';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// HTTP Auth Based Imports
import {
    HttpClient,
    HttpClientModule,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import { AuthenticationInterceptor } from './_services/authentication.interceptor.service'
import { CookieService } from 'ngx-cookie-service';
import { LOCAL_STORAGE } from 'ngx-webstorage-service';
import { AuthenticationService } from './_services/authentication.service';

// Font awesome imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMugHot, faHeart,
    faTh, faThList,
    faSignInAlt, faUserPlus,
    faPlaneDeparture, faMapMarked,
    faSearch, faWindowClose, faPen,
    faHiking, faCalendarAlt, faArchway, faComments,
    faCogs, faEdit, faTrashAlt, faArrowCircleLeft, faSave,
    faUpload
} from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faMugHot,
    faTh, faThList,
    faSignInAlt, faUserPlus,
    faPlaneDeparture, faMapMarked,
    faSearch, faWindowClose, faPen,
    faHiking, faCalendarAlt, faArchway, faComments,
    faCogs, faEdit, faTrashAlt, faArrowCircleLeft, faSave,
    faUpload
);

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserProfileComponent
  ],
  imports: [FormsModule, ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatNativeDateModule,
    MatDatepickerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    MatDatepickerModule,
    CookieService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
