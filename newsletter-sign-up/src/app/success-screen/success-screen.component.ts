import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-success-screen',
  standalone: true,
  imports: [],
  templateUrl: './success-screen.component.html',
  styleUrl: './success-screen.component.css'
})
export class SuccessScreenComponent implements OnInit {
  email!: string;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.email = this.route.snapshot.paramMap.get("email") ?? "";
  }

  dismissMessage() {
    console.log("dismiss");
    this.router.navigate(["/"]);
  }
}
