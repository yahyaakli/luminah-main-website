import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fusion-challenges',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './fusion-challenges.component.html',
  styleUrl: './fusion-challenges.component.scss'
})
export class FusionChallengesComponent {
  activeChallenge: number = 0;

  challenges = [
    "Extreme Conditions: Fusion reactions require heating plasma to over 100 million degrees Celsius and maintaining this state under extreme pressure.",
    "Plasma Stability: Controlling the turbulent, highly dynamic plasma to prevent disruptions and energy losses is a persistent challenge.",
    "Material Durability: Reactor components must withstand intense neutron radiation, thermal cycling, and plasma interactions, which can lead to material degradation and reduced reactor lifespan.",
    "System Integration: Coordinating the vast array of support systems, magnetic confinement, cooling, diagnostics, and energy transfer, demands cutting-edge solutions and precise real-time control."
  ];

  toggleChallenge(index: number): void {
    this.activeChallenge = this.activeChallenge === index ? 0 : index;
  }
}


