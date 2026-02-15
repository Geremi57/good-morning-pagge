import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form-component/form-component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormComponent],
  template: `
    <h1 class=" grid relative justify-center p-4 font-mono ">Hello, {{ title() }}</h1>
  <app-form-component></app-form-component>
    <router-outlet />
  `, 
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('good morning');
}
