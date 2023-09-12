import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { BaseDigitalHumanComponent } from './base-digital-human/base-digital-human.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  color: string = ''; // or any default value
  background: string = ''; // or any default value

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  // Inject ComponentFactoryResolver and ViewContainerRef
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    const storedConfig = localStorage.getItem('customComponentConfig');
    if (storedConfig) {
      const { color, background } = JSON.parse(storedConfig);
      this.createCustomComponent(color, background);
    }
  }

  createCustomComponent(color: string, background: string): void {
    // Your logic to dynamically create the component goes here.
    // For example,
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(BaseDigitalHumanComponent);
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    componentRef.instance.color = color;
    componentRef.instance.background = background;
  }

  createDigitalHuman() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(BaseDigitalHumanComponent);
    const componentRef = this.container.createComponent(factory);

    componentRef.instance.color = this.color;
    componentRef.instance.background = this.background;
  }

  saveConfig(): void {
    const config = {
      color: this.color,
      background: this.background,
    };
    localStorage.setItem('customComponentConfig', JSON.stringify(config));
  }
}
