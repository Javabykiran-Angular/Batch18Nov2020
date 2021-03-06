import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { FollowerComponent } from './follower/follower.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { QueryparamComponent } from './queryparam/queryparam.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BootstrapdemoComponent } from './bootstrapdemo/bootstrapdemo.component';
import { TdfComponent } from './tdf/tdf.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    FollowerComponent,
    MyfollowerComponent,
    QueryparamComponent,
    NotfoundComponent,
    BootstrapdemoComponent,
    TdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
