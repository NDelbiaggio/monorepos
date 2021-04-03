import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ReusableComponentsModule } from '@monorepos/reusable-components';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReusableComponentsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
