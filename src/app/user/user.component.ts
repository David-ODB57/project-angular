import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title: string = 'Liste des utilisateurs'
  userList: User[] = [];

  constructor(private req: RequestService) { }

  ngOnInit() {
    this.req.getUsers().subscribe(userList => {
      console.table(userList)
      this.userList = userList;
    });
    console.table(this.userList);
  }

}
