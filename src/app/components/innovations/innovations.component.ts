import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-innovations',
  standalone: true,
  imports: [],
  templateUrl: './innovations.component.html',
  styleUrl: './innovations.component.scss'
})
export class InnovationsComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    new Swiper('.portfolio-slider', {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-portfolio-next',
        prevEl: '.swiper-portfolio-prev',
      },
      loop: true,
    });
  }
}
