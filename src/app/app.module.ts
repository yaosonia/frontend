import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
<<<<<<< HEAD
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import {MatExpansionModule} from '@angular/material/expansion';
=======
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 790ca18b894308a4e79468c44d84430b1c52728d

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    NavbarComponent,
<<<<<<< HEAD
    HomeComponent,
    ProfileComponent,
=======
    HomeComponent
>>>>>>> 790ca18b894308a4e79468c44d84430b1c52728d
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
<<<<<<< HEAD
    AppRoutingModule,
    MatExpansionModule
=======
>>>>>>> 790ca18b894308a4e79468c44d84430b1c52728d
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
