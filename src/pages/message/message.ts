import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers } from '@angular/http';


/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  public token;
  public messages;
  public message;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http :Http) {
    this.getMessages();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }
  displayToken() {
    alert(this.navParams.get('token'));
  }

  getHeaders () : Headers  {
    let headers = new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.token = localStorage.getItem("token");
    headers.append("token",this.token);
    return headers
  }

  getMessages() {
    this.http.get("https://cesi.cleverapps.io/messages", {headers:this.getHeaders()}).subscribe(res=> {
      this.messages=res.json();
    }, (err) => {
      console.log(err);
      alert("error calling http " + err);
    })
  }

  postmsg() {
    let body ='message=' +this.message
    this.http.post("https://cesi.cleverapps.io/messages",body,{headers:this.getHeaders()}).subscribe(res=>
      {
        console.log(res);
        this.getMessages();
      }, (err) => {
        console.log(err);
        alert("error calling http " + err);
      }

    )
  }


}
