import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import * as firebase from "firebase";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  constructor(private router: Router) {}

  signup(form: NgForm) {
    let username = form.value.username;
    let email = form.value.email;
    let phone = form.value.phone;
    let password = form.value.password;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userData => {
        userData.user.sendEmailVerification();
      })
      .catch(err => {
        console.log(err);
      });
  }

  ngOnInit() {}
}
