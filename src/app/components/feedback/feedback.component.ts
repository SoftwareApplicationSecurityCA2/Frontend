import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Use if you're applying template-driven forms
// ReactiveFormsModule if using reactive forms, but it's not utilized in the provided code
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DatabaseService } from '../../services/database/database.service';

export class Feedback {
  constructor(public feedback: string) {}
}

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule], // Only include the modules you're using
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'], // Correct property name
})
export class FeedbackComponent {
  feedbackModel = new Feedback('');
  feedbackHtml: SafeHtml | null = null;

  constructor(
    private databaseService: DatabaseService,
    private sanitizer: DomSanitizer
  ) {}

  onSubmit() {
    this.databaseService.submitFeedback(this.feedbackModel).subscribe({
      next: (response) => {
        // In your component
        this.feedbackHtml = this.sanitizer.bypassSecurityTrustHtml(
          'Injected script: ' + response.message
        );
      },
      error: (err) => console.error('Error submitting feedback', err),
    });
  }
}
