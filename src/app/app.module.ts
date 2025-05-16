import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathematicsMasteryComponent } from './components/mathematics-mastery/mathematics-mastery.component';
import { PythonProgrammingComponent } from './components/python-programming/python-programming.component';
import { HomeComponent } from './components/home/home.component';
import { RewriteComponent } from './components/rewrite/rewrite.component';


@NgModule({
  declarations: [
    AppComponent,
    MathematicsMasteryComponent,
    PythonProgrammingComponent,
    HomeComponent,
    RewriteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
