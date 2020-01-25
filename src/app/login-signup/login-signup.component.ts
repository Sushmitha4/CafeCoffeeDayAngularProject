import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import * as firebase from "firebase";

@Component({
  selector: "app-login-signup",
  templateUrl: "./login-signup.component.html",
  styleUrls: ["./login-signup.component.css"]
})
export class LoginSignupComponent implements OnInit {
  constructor(private router: Router) {}

  login(form: NgForm) {
    let email = form.value.email;
    let password = form.value.password;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userData => {
        userData.user.sendEmailVerification();
      })
      .catch(err => {
        console.log(err);
      });
  }
  ngOnInit() {}
}
