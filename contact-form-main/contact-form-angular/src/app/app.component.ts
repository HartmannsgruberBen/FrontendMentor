import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgStyle } from '@angular/common';
import { MyMessageDialogComponent } from "./my-message-dialog/my-message-dialog.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, NgClass, NgStyle, MyMessageDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'contact-form-angular';
  myForm: FormGroup;
  validatingFields: boolean = false;
  showSuccessMessage: boolean = false;

  constructor() {
    this.myForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      queryType: new FormControl("", [Validators.required]),
      message: new FormControl("", [Validators.required]),
      contacting: new FormControl("", [Validators.requiredTrue])
    })
  }

  fieldShowsError(controlName: string): boolean {
    const control = this.myForm.get(controlName)!!;
    console.log(controlName, control.invalid);
    return control.invalid;
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.validatingFields = true;
    } else {
      this.showSuccessMessage = true;
    }
  }
}
