import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropBindingComponent } from './components/prop-binding/prop-binding.component';
import { ClassbindindComponent } from './components/classbindind/classbindind.component';
import { StylebindingComponent } from './components/stylebinding/stylebinding.component';
import { EventbindingComponent } from './components/eventbinding/eventbinding.component';
import { TwowayComponent } from './components/twoway/twoway.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InterpolationComponent,
    PropBindingComponent,
    ClassbindindComponent,
    StylebindingComponent,
    EventbindingComponent,
    TwowayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
