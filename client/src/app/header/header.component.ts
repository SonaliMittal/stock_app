import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean=false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.isLoggedIn=true;
    } else {
      this.isLoggedIn=false;
    }
  }
}
