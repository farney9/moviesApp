import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // const id =  this.activatedRoute.snapshot.params.id;
    
    // otra forma de extraer el id es através de la des estructuración
    const {id} =  this.activatedRoute.snapshot.params;
    
    console.log(id);
    
  }

}
