import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers } from '@angular/http';
import {UsersPage} from '../users/users'


/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  public username : String;
  public pwd : String;
  public urlPhoto : String;
  public headers : Headers
  public token : String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }
  getHeaders () : Headers  {
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    return headers
  }

  createUser() {

    let body ='username=' +this.username+ "&pwd="+this.pwd
    this.http.post("https://cesi.cleverapps.io/signup",body, {headers:this.getHeaders()}).subscribe( res => {
      console.log("c'est fait");
      alert("User bien crée " );

    }, (err) => {
      console.log(err);
      alert("error calling http " + err);


    })
  }

  gotousers () {
  this.navCtrl.push(UsersPage,{
    token : this.token
  })
  }
}
