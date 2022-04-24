import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../interfaces/register';
import { Connexion } from '../interfaces/connexion';
import { ConnectUserService } from '../services/connect-user.service';
import { RegisterUserService } from '../services/register-user.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  connexion = this.formBuilder.group({
    email: "",
    password: ""
  })
  inscription = this.formBuilder.group({
    email: "",
    pseudo: "" ,
    password: "" ,
    confirm_password: ""
  })

  isToken: boolean = false;
  isLogged: boolean = false;
  message: string = "";

  constructor(private registerUser: RegisterUserService, private userConnexion: ConnectUserService, private formBuilder: FormBuilder, private router: Router, private token: TokenService) { }

  ngOnInit() {
    if (this.router.url.startsWith("/login")) this.isLogged = true;
  }

  onSubmitInscription(formData: Object) {
    console.table(formData)
    let that = this;
    let newUser: Register = {
      pseudo: this.inscription.value.pseudo,
      email: this.inscription.value.email,
      password: this.inscription.value.password,
      avatar: "",
    }
    
    this.registerUser.register(newUser).subscribe({
      next(response) {
        console.table(response);
        that.router.navigate(["/user"])
      },
      error(err) {
        console.error(err);
        
      }
    })
    this.message = "formulaire envoyé";
  }

  onSubmitLogin(formData: Object) {
    console.table(formData)
    let that = this;
    let user: Connexion = {
      email: this.connexion.value.email,
      password: this.connexion.value.password,
    }
    this.userConnexion.login(user).subscribe({
      next(response: any) {
        that.token.setToken(response.token); 
        localStorage.setItem("token", response.token);
        that.isToken = true;
        that.router.navigate(["/user"])
      },
      error(err) {
        console.error(err);
      }
    })
    this.message = "formulaire envoyé";
  }

}
