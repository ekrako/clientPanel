import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'

@Injectable()
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  login(username:string,password:string){
    return this.afAuth.auth.signInWithEmailAndPassword(username,password);
  }
  logout(){
    return this.afAuth.auth.signOut();
  }

  getAuth(){
    return this.afAuth.authState.map(auth => auth);
  }

  register(username:string,password:string){
    return this.afAuth.auth.createUserWithEmailAndPassword(username,password);
  }
}
