import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  success = false;
  error = false;

  constructor(private http: HttpClient) {}

  onSubmit(form: any): void {
    const url = '/assets/php/email.php'; // Path to the PHP file
    const formData = new FormData();

    formData.append('name', form.value.name);
    formData.append('email', form.value.email);
    formData.append('subject', form.value.subject);
    formData.append('message', form.value.message);

    this.http.post(url, formData).subscribe({
      next: (response: any) => {
        this.success = true;
        this.error = false;
        form.reset();
      },
      error: (error) => {
        console.error(error);
        this.success = false;
        this.error = true;
      },
    });
  }
}
