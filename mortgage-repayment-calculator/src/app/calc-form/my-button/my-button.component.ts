import { Component, Input } from '@angular/core';

@Component({
  selector: 'button [myButton]',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
  @Input({required: true}) type: string = "text";
}
