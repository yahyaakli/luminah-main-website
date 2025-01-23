import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { KnowledgeGraphComponent } from './components/knowledge-graph/knowledge-graph.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    AboutUsComponent, 
    ServicesComponent,
    KnowledgeGraphComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'luminah-ui';
}
