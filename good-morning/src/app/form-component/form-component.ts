import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form-component',
  imports: [FormsModule, CommonModule, HttpClientModule],
  template: `
  <div class="min-h-screen flex items-center justify-center bg-gray-900">
  <form #userForm="ngForm"
   (ngSubmit)="onSubmit(userForm)" 
  class="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md">

    <!-- Name -->
    <label class="block text-gray-300 mb-2 text-sm">Your Name</label>
    <input
      type="text"
      name="name"
      [(ngModel)]="name"
      required
      #nameRef="ngModel"
      class="w-full px-4 py-3 mb-4 rounded-xl bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 transition"
      placeholder="Enter your name"
    />
    <p *ngIf="nameRef.invalid && nameRef.touched"
    class="text-red-400 text-sm mb-4">
    Name is required
    </p>

    <!-- Email -->
    <label class="block text-gray-300 mb-2 text-sm">Email Address</label>
    <input
      type="email"
      name="email"
      [(ngModel)]="email"
      required
      email
      #emailRef="ngModel"
      class="w-full px-4 py-3 mb-4 rounded-xl bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 transition"
      placeholder="Enter your email"
    />

    <p *ngIf="emailRef.invalid && emailRef.touched"
    class="text-red-400 text-sm mb-4">
    Enter a valid email
    </p>

    <!-- Phone -->
    <label class="block text-gray-300 mb-2 text-sm">Phone Number</label>
    <input
      type="tel"
      name="phoneNumber"
      [(ngModel)]="phoneNumber"
      required
      pattern="^[0-9+]{7,15}$"
      inputmode="numeric"
      #phoneRef="ngModel"
      class="w-full px-4 py-3 mb-6 rounded-xl bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 transition"
      placeholder="+254712345678"
    />
    <p *ngIf="phoneRef.invalid && phoneRef.touched"
      class="text-red-400 text-sm mb-4">
      Enter a valid phone number (7–15 digits)
    </p>

    <!-- Button -->
    <button
    type="submit"
      class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition"
      [disabled]="userForm.invalid">
      Submit
    </button>

</form>
</div>

  `,
  styleUrl: './form-component.css',
})
export class FormComponent {
  http = inject(HttpClient)
  name = ''
  email = ''
  phoneNumber = ''

 onSubmit(form: any) {
  if (form.valid) {
    this.http.post('http://localhost:3000/submit', {
      name: this.name,
      email: this.email,
      phone: this.phoneNumber
    }).subscribe({
      next: (res) => {
        alert('Data saved successfully!');
        form.reset();
      },
      error: (err) => {
        alert('Error saving data');
        console.error(err);
      }
    });
  }
}


}
