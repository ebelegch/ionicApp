import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import {SignInPage} from '../sign-in/sign-in'
import {UsersPage} from '../users/users'
import {TabsPage} from '../tabs/tabs'



/**
 * Generated class for the LogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log',
  templateUrl: 'log.html',
})
export class LogPage {

  public username : String;
  public pwd : String;
  public urlPhoto : String;
  public token : String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogPage');
  }

  gotoMessagesPage() {
    this.navCtrl.push(SignInPage,{
      token : '3030303'
    })
  }
  getHeaders () : Headers  {
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    return headers
  }

  createUser() {
    let body ='username=' +this.username+ "&pwd="+this.pwd
    this.http.post("https://cesi.cleverapps.io/signin",body,{headers:this.getHeaders()}).subscribe(res=>
      {
        this.token=res.json().token;
        localStorage.setItem("token", res.json().token);
        this.gotousers();
        console.log(res);
      }, (err) => {
      console.log(err);
      alert("error calling http " + err);
    }

    )
  }
  gotousers () {
    this.navCtrl.push(TabsPage,{
      token : this.token
    })
  }
}
