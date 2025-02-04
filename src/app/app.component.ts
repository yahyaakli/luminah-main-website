import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { KnowledgeGraphComponent } from './components/knowledge-graph/knowledge-graph.component';
import { InnovationsComponent } from './components/innovations/innovations.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { ContactComponent } from './components/contact/contact.component';
import { ScrollAnimationDirective } from './directives/scroll-animation.directive';
import { HeaderComponent } from './components/header/header.component';
import { NuclearFusionImportanceComponent } from './components/nuclear-fusion-importance/nuclear-fusion-importance.component';
import { FusionChallengesComponent } from './components/fusion-challenges/fusion-challenges.component';
import { FusionInnovationComponent } from './components/fusion-innovation/fusion-innovation.component';

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
    HeaderComponent,
    NuclearFusionImportanceComponent,
    FusionChallengesComponent,
    FusionInnovationComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'luminah-ui';
}
