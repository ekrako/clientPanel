import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  login(username: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(username, password);
  }
  googleLogin() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  facebookLogin() {
    let temp = this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    console.log(temp);
    return temp;
  }
  logout() {
    return this.afAuth.auth.signOut();
  }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  register(username: string, password: string){
    return this.afAuth.auth.createUserWithEmailAndPassword(username, password);
  }
}
