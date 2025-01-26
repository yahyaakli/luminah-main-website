import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true, // Make the directive standalone
})
export class ScrollAnimationDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'section-hidden');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'section-visible');
            this.renderer.removeClass(this.el.nativeElement, 'section-hidden');
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        root: null, // Use the viewport
        rootMargin: '0px 0px -50% 0px', // Trigger when the element reaches the middle of the viewport
        threshold: 0, // Ensure it triggers as soon as it enters the rootMargin area
      }
    );
    
    

    observer.observe(this.el.nativeElement);
  }
}
