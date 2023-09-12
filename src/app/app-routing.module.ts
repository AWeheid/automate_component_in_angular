import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestCustomComponentComponent } from './TestCustomComponent/TestCustomComponent.component';
// Dynamic Component Imports
  import { HelloComponent } from './Hello/Hello.component';
const routes: Routes = [
  // ... other routes ...
  // Dynamic Component Routes
  { path: 'hello', component: HelloComponent },
  { path: 'testcustomcomponent', component: TestCustomComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
