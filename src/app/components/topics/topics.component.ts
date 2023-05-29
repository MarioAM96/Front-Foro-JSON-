import { Component, OnInit } from '@angular/core';
import { ForoService,Foro } from '../../services/foro.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit{

  foro: Foro={
    id: '',
    user: '',
    topic: '',
    comment1: '',
    comment2: '',
    comment3: '',
  }

  ListarForo: Foro[] = [];

  constructor(
    private ForoService:ForoService,
    private router:Router,
    private activeRoute:ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.listarForo();
  }

  listarForo()
  {
    this.ForoService.getForo().subscribe(
      res=>{
        console.log(res);
        this.ListarForo=<any>res;
      },
      err => console.log(err)
    );
  }

  agregarComm(id:any){
    //console.log(id);
    this.ForoService.getComment(this.foro.id).subscribe(
      res=>{
        console.log(res);
        this.listarForo();
      }
    )
  }

}
