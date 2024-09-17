import { Component, Input } from '@angular/core';

@Component({
  selector: 'input [myInput]',
  standalone: true,
  imports: [],
  templateUrl: './my-input.component.html',
  styleUrl: './my-input.component.css'
})
export class MyInputComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) id!: string;
  @Input({required: true}) type: string = "text";
  @Input() leadingIcon?: string;
  @Input() trailingIcon?: string;
}
