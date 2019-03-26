import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { DetailUsersPage } from '../detail-users/detail-users.page'

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  constructor(private modalctr: ModalController) { }

  ngOnInit() {
  }

  async detailUs(){
    const modal = await this.modalctr.create({
      component: DetailUsersPage,
      componentProps:{
        name: "tran van a",
        id: 2156545
      }
    });
    return await modal.present();
  }
}
