import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoEditComponent } from './to-do-list/to-do-edit/to-do-edit.component';
import { HeaderComponent } from './header/header.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BetterHighlightDirective } from './better-highlight-directive/better-highlight.directive';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectAccessGuard } from './direct-access-guard.service';
import { DataService } from './shared/data.service';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'to-do-list',
    component: ToDoListComponent,      
    children: [
      {
        path: 'to-do-list/something',
        component: LoginComponent,
        canActivate: [DirectAccessGuard]
      }
    ] 
  },

]

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoEditComponent,
    HeaderComponent,
    BetterHighlightDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DirectAccessGuard, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
