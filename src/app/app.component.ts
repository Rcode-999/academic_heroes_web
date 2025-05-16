import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  contactForm: FormGroup;
  showConfirmation = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      studentName: ['', Validators.required],
      parentEmail: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      gradeLevel: ['', Validators.required],
      interest: ['', Validators.required],
      message: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.sendToWhatsApp();
      this.showConfirmation = true;
      this.contactForm.reset();
    }
  }

  sendToWhatsApp() {
    const formData = this.contactForm.value;
    const whatsappNumber = '27644318837'; 
    
    const message = `
  📋 *TUTORING INQUIRY* 📋%0A%0A
  ━━━━━━━━━━━━━━%0A
  🔹 *Student Name:* ${formData.studentName}%0A
  🔹 *Parent Email:* ${formData.parentEmail}%0A
  🔹 *Phone:* ${formData.phoneNumber}%0A
  🔹 *Grade:* ${formData.gradeLevel}%0A
  🔹 *Subject:* ${formData.interest}%0A%0A
  💬 *Message:*%0A${formData.message || 'No additional details provided.'}%0A%0A
  ━━━━━━━━━━━━━━%0A
  _We’ll respond within 24 hours._%0A`;
  
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message.trim())}`, '_blank');
  }
}