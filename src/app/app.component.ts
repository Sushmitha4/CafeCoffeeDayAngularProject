import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "cafeCoffeeDay";

  ngOnInit() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCN81K4tvf1p4jfob9vI2RfXy0nEUliDVw",
      authDomain: "cafecoffeeday-4ff76.firebaseapp.com",
      databaseURL: "https://cafecoffeeday-4ff76.firebaseio.com",
      projectId: "cafecoffeeday-4ff76",
      storageBucket: "cafecoffeeday-4ff76.appspot.com",
      messagingSenderId: "350483630600",
      appId: "1:350483630600:web:c3124728318d931284dfbd"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
