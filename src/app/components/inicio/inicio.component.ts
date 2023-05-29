import { Component, OnInit } from '@angular/core';
import { ForoService,Foro } from '../../services/foro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit{

  foro: Foro={
    id:'',
    user: '',
    topic: '',
    comment1: '',
    comment2: '',
    comment3: '',
  }

  constructor(
    private ForoService:ForoService,
    private router:Router
  ){

  }

  ngOnInit(): void {
  
  }

  agregarForo(){
    this.ForoService.addForo(this.foro).subscribe();
    this.router.navigate(['./topics'])
  }

}
