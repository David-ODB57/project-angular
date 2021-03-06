import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  updateUser = this.formBuilder.group({
    pseudo: "",
    niveau: null,
    password: "",
    avatar: ""
  })
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
