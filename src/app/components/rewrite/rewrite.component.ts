import { Component } from '@angular/core';

@Component({
  selector: 'app-rewrite',
  standalone: false,
  templateUrl: './rewrite.component.html',
  styleUrl: './rewrite.component.css'
})
export class RewriteComponent {
  rewriteTopics = [
    {
      name: 'Algebra & Equations',
      expanded: false,
      subTopics: ['Quadratics', 'Simultaneous equations', 'Inequalities']
    },
    {
      name: 'Functions & Graphs',
      expanded: false,
      subTopics: ['Parabolas', 'Exponential', 'Hyperbolic']
    },
    {
      name: 'Trigonometry',
      expanded: false,
      subTopics: ['Trig ratios', 'Graphs', 'Identities', 'Equations']
    },
    {
      name: 'Calculus',
      expanded: false,
      subTopics: ['First principles', 'Differentiation rules', 'Applications']
    },
    {
      name: 'Probability & Stats',
      expanded: false,
      subTopics: ['Counting principles', 'Mean, median, mode', 'Box plots']
    }
  ];

  toggleTopic(topic: any): void {
    this.rewriteTopics.forEach(t => {
      if (t !== topic) {
        t.expanded = false;
      }
    });
    topic.expanded = !topic.expanded;
  }
  
  
}
