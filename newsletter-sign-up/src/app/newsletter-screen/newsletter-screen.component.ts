import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MyListItemComponent } from '../my-list-item/my-list-item.component';
import {Router} from "@angular/router";

@Component({
  selector: 'app-newsletter-screen',
  standalone: true,
  imports: [MyListItemComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './newsletter-screen.component.html',
  styleUrl: './newsletter-screen.component.css'
})
export class NewsletterScreenComponent {
  showError: boolean = false;

  constructor(private router: Router){}

  newsletterFormGroup: FormGroup = new FormGroup({
    emailControl: new FormControl("", [Validators.required, Validators.email])
  });

  onSubmit() {
    const control = this.newsletterFormGroup.controls["emailControl"];

    if(control.valid) {
      this.router.navigate(["/subscribing-success", control.value]);
    } else {
      this.showError = true;
    }
  }
}
