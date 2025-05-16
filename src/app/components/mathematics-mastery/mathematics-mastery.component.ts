import { Component } from '@angular/core';

@Component({
  selector: 'app-mathematics-mastery',
  standalone: false,
  templateUrl: './mathematics-mastery.component.html',
  styleUrl: './mathematics-mastery.component.css'
})
export class MathematicsMasteryComponent {
  grades = [
    {
      level: 'Grade 10',
      focus: 'Foundational Algebra & Functions',
      topics: [
        'Linear/Quadratic Equations', 
        'Exponents & Surds',
        'Trigonometry Basics (SOHCAHTOA)',
        'Euclidean Geometry Proofs'
      ],
      expanded: false
    },
    {
      level: 'Grade 11',
      focus: 'Advanced Functions & Intro Calculus',
      topics: [
        'Polynomials & Hyperbolas', 
        'Trig Identities & 3D Problems',
        'Differential Calculus (First Principles)',
        'Financial Math (Annuities)'
      ],
      expanded: false
    },
    {
      level: 'Grade 12',
      focus: 'Calculus Mastery & Exam Strategy',
      topics: [
        'Optimization Problems', 
        'Graph Sketching (Stationary Points)',
        'Probability (Fundamental Counting)',
        'Past Paper Drill Sessions'
      ],
      expanded: false
    }
  ];
  
  toggleGrade(grade: any) {
    grade.expanded = !grade.expanded;
  }
}
