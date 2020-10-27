import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

//import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class UserAuthService {user: Observable<firebase.User>;

    constructor(private firebaseAuth: AngularFireAuth) {
      this.user = firebaseAuth.authState;
    }
  
    signup(email: string, password: string) {
      this.firebaseAuth
        .auth
        .createUserWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Success!', value);
        })
        .catch(err => {
          console.log('Something went wrong:',err.message);
        });    
    }
  
    login(email: string, password: string) {
      this.firebaseAuth
        .auth
        .signInWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Nice, it worked!');
        })
        .catch(err => {
          console.log('Something went wrong:',err.message);
        });
    }
  
    logout() {
      this.firebaseAuth
        .auth
        .signOut();
    }
}