import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
//import { Observable, Subject } from 'rxjs/Rx';
declare var firebase: any;
@Injectable()
export class UserAuthService {
constructor(private router: Router) { }
signupUser(user: User) {
firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
.catch(function (error) {
// Handle Errors here.
//var errorCode = error.code;
//var errorMessage = error.message;
// ...
console.log(error);
});
}
logout() {
firebase.auth().signOut();
this.router.navigate(['/signin']);
}
signinUser(user: User) {
firebase.auth().signInWithEmailAndPassword(user.email, user.password)
.catch(function (error) {
// Handle Errors here.
//var errorCode = error.code;
//var errorMessage = error.message;
console.log(error);
// ...
});
}
isAuthenticated() {
var user = firebase.auth().currentUser;
if (user) {
return true;
}
else {
return false;
}
}
userProfile() {
var user = firebase.auth().currentUser;
var name, email, photoUrl,password, uid, emailVerified;
if (user != null) {
//name = user.displayName;
email = user.email;
password=user.password;
return user;
//photoUrl = user.photoURL;
//emailVerified = user.emailVerified;
//uid = user.uid;
}
else{
return null;
}
}
}