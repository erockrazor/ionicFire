import { AlertService } from './../../services/alert/alert.service';
import { FormsModule } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [AngularFireAuth],
})

export class LoginPage implements OnInit {
  user = {
    email: '',
    password: ''
  };
  
  
  constructor(
    public afAuth:AngularFireAuth, 
    private router: Router,
    public formsModule: FormsModule,
    private alertService: AlertService,
  ){

  }

  ngOnInit() {
  }
  
  login(){
    this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(res => {
      console.log(res);
      if(res.user.uid){
        this.router.navigateByUrl('/home')
        .then(res => console.log(res));
      }
    }, (error:any) => {
      this.alertService.presentAlert('Sign In Error', error.message, 'OK');
    });
  }
  
  createAccount(){
    this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(res => {
      console.log(res);
    }, (error: any) => {
      this.alertService.presentAlert('Sign In Error', error.message, 'OK');
    }); 
  }

}
