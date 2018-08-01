import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { RavintolatService } from './ravintolat.service';
import { RouterModule } from '@angular/router';




import { AppComponent } from './app.component';
import { RavintolatComponent } from './ravintolat/ravintolat.component';

@NgModule({
  declarations: [
    AppComponent,
    RavintolatComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
      path: '',
      redirectTo: '/calc',
      pathMatch: 'full'
      },
      {
      path: 'calc',
      component: RavintolatComponent
      },
      {
      path: '**',
      component: RavintolatComponent
      },
      ])
      ],
  
  providers: [RavintolatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
