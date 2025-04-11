import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
})
export class LandingComponent implements OnInit {
  constructor() {}

  slides: string[] = [
    'assets/img/12.jpg',
    'assets/img/13.jpg',
    'assets/img/14.jpg',
    // ajoute les autres images ici
  ];
  currentSlideIndex: number = 0;
  intervalId: any;

  ngOnInit(): void {
    // Change le slide toutes les 2 secondes
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // 3000 ms = 3 secondes
  }

  ngOnDestroy(): void {
    // Clean up l'intervalle lorsqu'on quitte le composant
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  prevSlide(): void {
    if (this.currentSlideIndex === 0) {
      this.currentSlideIndex = this.slides.length - 1;
    } else {
      this.currentSlideIndex--;
    }
  }

  nextSlide(): void {
    if (this.currentSlideIndex === this.slides.length - 1) {
      this.currentSlideIndex = 0;
    } else {
      this.currentSlideIndex++;
    }
  }
}

