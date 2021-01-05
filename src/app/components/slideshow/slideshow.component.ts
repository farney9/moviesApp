import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/cartelera-response';
import SwiperCore from "swiper/core";

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.html']
})
export class SlideshowComponent implements OnInit {

  @Input() movies: Movies[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.movies);
    
  }

  onSwiper(swiper) {
    console.log(swiper)
  }

  onSlideChange() {
    console.log('slide change')
  }

}
