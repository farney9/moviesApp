import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/cartelera-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movies[];

  public mySwiper: Swiper;

  constructor() { }

  ngAfterViewInit(): void {
   this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })

  }

  ngOnInit(): void {
    // console.log(this.movies);
  }

  onSlideNext(){
    this.mySwiper.slideNext();
  }

  onSlidePrev(){
    this.mySwiper.slidePrev();
  }
}
