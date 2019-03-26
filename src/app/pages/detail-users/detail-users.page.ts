import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-detail-users',
  templateUrl: './detail-users.page.html',
  styleUrls: ['./detail-users.page.scss'],
})
export class DetailUsersPage implements OnInit {

  constructor(private modalctr: ModalController) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalctr.dismiss();
  }

}
