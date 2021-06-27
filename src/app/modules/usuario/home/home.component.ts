import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/data/services/api.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeUserComponent implements OnInit {

  public user: any;

  constructor(public api: ApiService, public router: Router) { 
    this.user = this.api.userLogged;
  }

  ngOnInit(): void {
    $('#boton').click(function(){
      alert("Wass up!");
    });
    $('#eduVargas').draggable();
  }

  logout(){
    this.user = null;
    this.router.navigate(['/']);
  }

}
