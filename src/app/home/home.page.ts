import { Component } from '@angular/core';
import { SVService } from "../services/sv.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 email: string;
 password: string;
  constructor(private svservice: SVService, private router: Router){}

  ngOnInit(){   
  }

  onLogin(){
    this.svservice.login(this.email, this.password).then(res => {
      this.router.navigate(['/users'])
    }).catch(err => alert('không tồn tại tài khoản'))
  }
  

}
