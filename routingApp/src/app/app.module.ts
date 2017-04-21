import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';

import { StudentComponent } from './student/student.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import {MyActivateGuard} from './my-activate.guard';
import { ErrorComponent } from './error/error.component';

const stuRoutes:Routes=[ {path:'home', component:HomeComponent},
{path:'', redirectTo:'home',pathMatch:'full'},
{path:'students', component:StudentComponent ,
children: [ {path:'profile/:id' ,component: ProfileComponent, canActivate:[MyActivateGuard]}],},
 {path :'error', component:ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ProfileComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(stuRoutes)
  ],
  providers: [MyActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
