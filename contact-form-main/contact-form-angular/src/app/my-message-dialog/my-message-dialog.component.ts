import { Component, Input } from '@angular/core';
import { Image } from './models/Image';

@Component({
  selector: 'app-my-message-dialog',
  standalone: true,
  imports: [],
  templateUrl: './my-message-dialog.component.html',
  styleUrl: './my-message-dialog.component.scss'
})
export class MyMessageDialogComponent {
  @Input({ required: true }) messageDescription!: string;
  @Input({ required: true }) messageHeadline!: string;
  @Input() icon?: Image;
}
