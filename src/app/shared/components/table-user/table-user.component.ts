import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/data/services/api.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUserComponent implements OnInit {

  users: Array<User>;

  constructor(public api: ApiService) { 
    this.users = this.api.getUsers();
  }

  ngOnInit(): void {
  }

}
