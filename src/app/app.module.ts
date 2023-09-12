import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseDigitalHumanComponent } from './base-digital-human/base-digital-human.component';
import { FormsModule } from '@angular/forms';
// Dynamic Component Imports
import { HelloComponent } from './Hello/Hello.component';
import { TestCustomComponentComponent } from './TestCustomComponent/TestCustomComponent.component';
@NgModule({
  declarations: [
    AppComponent,
    BaseDigitalHumanComponent,
    // Dynamic Component Declarations
    HelloComponent,
    TestCustomComponentComponent,
    // ... other declarations ...
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
