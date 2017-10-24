import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers } from '@angular/http';


/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  public users ;
  public token;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http :Http) {
    this.getUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  getHeaders () : Headers  {
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.token = localStorage.getItem("token");
    headers.append("token",this.token);

    return headers
  }

  getUsers() {
    this.http.get("https://cesi.cleverapps.io/users", {headers:this.getHeaders()}).subscribe(res=> {
      this.users=res.json();
      console.log(this.users.length);
    }, (err) => {
      console.log(err);
      alert("error calling http " + err);
    })
  }



}
