import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  contactForm: FormGroup;
  showConfirmation = false;
  claimOffer = false;
  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
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
    
    const message = this.renderWhatsAppMessage(formData);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  }
  
  private renderWhatsAppMessage(formData: any): string {
    return `
  📋 *TUTORING INQUIRY* 📋
  
  *Student Name:* ${formData.studentName}
  *Parent Email:* ${formData.parentEmail}
  *Phone:* ${formData.phoneNumber}
  *Grade:* ${formData.gradeLevel}
  *Subject:* ${formData.interest}
  *Message:* ${formData.message || 'No additional details provided.'}
  
  We'll respond within 24 hours.`.trim();
  }
  setClaimOffer(){
    this.claimOffer = true;
  }
}
