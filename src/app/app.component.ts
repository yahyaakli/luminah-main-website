import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { KnowledgeGraphComponent } from './components/knowledge-graph/knowledge-graph.component';
import { InnovationsComponent } from './components/innovations/innovations.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { ContactComponent } from './components/contact/contact.component';
import { ScrollAnimationDirective } from './directives/scroll-animation.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AboutUsComponent,
    ServicesComponent,
    KnowledgeGraphComponent,
    InnovationsComponent,
    MetricsComponent,
    ContactComponent,
    ScrollAnimationDirective,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'luminah-ui';
}
