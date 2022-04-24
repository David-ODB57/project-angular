import { Component, OnInit } from '@angular/core';
import { ConnectUserService } from '../services/connect-user.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { 

  constructor(private connectionService: ConnectUserService, private token: TokenService) { }

  ngOnInit() {    
  }

  onLogout() {
    this.token.setToken("");
    localStorage.removeItem("token");
    console.log(this.token.getToken());
    console.log(localStorage.getItem("token"));
    this.connectionService.logout();
  }

}
