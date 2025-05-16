import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathematicsMasteryComponent } from './components/mathematics-mastery/mathematics-mastery.component';
import { PythonProgrammingComponent } from './components/python-programming/python-programming.component';
import { HomeComponent } from './components/home/home.component';
import { RewriteComponent } from './components/rewrite/rewrite.component';

const routes: Routes = [
  { path: 'mathematics', component: MathematicsMasteryComponent },
  { path: 'python-programming', component: PythonProgrammingComponent },
  { path: 'rewrite', component: RewriteComponent },
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
