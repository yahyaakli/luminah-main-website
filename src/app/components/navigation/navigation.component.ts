import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class NavigationComponent {
  isNavOpen = false;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}
