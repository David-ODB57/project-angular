import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../services/request.service';
import { User } from '../interfaces/user';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User | undefined;
  updateForm = this.formBuilder.group({
    email: "",
    pseudo: "",
    niveau: undefined,
    password: "",
    avatar: "",
  })
  userId: number = +"";

  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${localStorage.getItem("token")}`
    })
  }

  constructor(private http: HttpClient, private updateUser: RequestService , private formBuilder: FormBuilder, private userDetails: RequestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
    if (this.userId != null) {
      this.userId = Number(this.route.snapshot.paramMap.get('id'));
      this.userDetails.getOneUser(this.userId)
        .subscribe(user => {
          console.table(user)
          this.user = user;
          console.table(this.user)
        });
    }
  }

  onSubmitUpdate(formData: Object) {
    console.table(formData)
    let that = this;
    let userUpdated: User = {
      id: this.userId,
      niveau: this.updateForm.value.niveau,
      pseudo: this.updateForm.value.pseudo,
      email: this.updateForm.value.email,
      password: this.updateForm.value.password,
      avatar: this.updateForm.value.avatar,
    }
    // console.log(localStorage)
    // console.log(`https://reseau.jdedev.fr/api/user/${userUpdated.id}`)
    this.http.put<User>(`https://reseau.jdedev.fr/api/user/${userUpdated.id}`, userUpdated, this.options)
      .subscribe(
        user => that.router.navigate([`/user/${user.id}`])
      )
    // this.updateUser.updateUser(userUpdated).subscribe({
    //   next(response) {
    //     console.table(response);
    //     that.router.navigate([`/user/${that.userId}`])
    //   },
    //   error(err) {
    //     console.error(err);
        
    //   }
    // })
  }

}
