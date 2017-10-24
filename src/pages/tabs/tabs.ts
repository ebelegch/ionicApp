/**
 * Created by ebelegch on 24/10/2017.
 */
import { Component } from '@angular/core';

import { MessagePage } from '../message/message';
import { UsersPage } from '../users/users';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MessagePage;
  tab2Root = UsersPage;

  constructor() {

  }
}
