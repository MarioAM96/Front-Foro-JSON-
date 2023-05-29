import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { TopicsComponent } from './components/topics/topics.component';

const routes: Routes = [
  {path:'', redirectTo: '/inicio', pathMatch:'full'},
  {path:'inicio', component:InicioComponent},
  {path:'topics', component:TopicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
