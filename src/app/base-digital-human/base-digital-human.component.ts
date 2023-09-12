import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-digital-human',
  templateUrl: './base-digital-human.component.html',
  styleUrls: ['./base-digital-human.component.scss']
})
export class BaseDigitalHumanComponent {
  @Input() color?: string;
  @Input() background?: string;

  ngOnInit() {
    console.log('Color:', this.color);
    console.log('Background:', this.background);
  }
}