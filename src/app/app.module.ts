import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAltersComponent } from './product-alters/product-alters.component';
import { DemocomponentComponent } from './democomponent/democomponent.component';
import { ChangeBgColorDirective } from './democomponent/changeBg.directive';
import { ViewComponent } from './view/view.component';
import { AppButtonComponent } from './app-button/app-button.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAltersComponent,
    DemocomponentComponent,
    ChangeBgColorDirective,
    ViewComponent,
    AppButtonComponent,
    CardComponent,
    CardListComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/