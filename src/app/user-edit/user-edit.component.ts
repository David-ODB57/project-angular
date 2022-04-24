import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User | undefined;

  constructor(private route: ActivatedRoute, private request: RequestService) { }

  ngOnInit() {
    const userId: string | null = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.request.getOneUser(+userId)
        .subscribe(user => this.user = user

        );
    } else {
      this.user = undefined;
    }
  }

}
