import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CalcFormComponent} from "./calc-form/calc-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalcFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mortgage-repayment-calculator';
}
